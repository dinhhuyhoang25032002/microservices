import { BadRequestException, Injectable } from '@nestjs/common';
import { SoftDeleteModel } from 'mongoose-delete';

import { HISTORY_MODEL, History } from 'src/schemas/history.schema';
import { InjectModel } from '@nestjs/mongoose';
import { PAYMENT_MODEL, Payments } from 'src/schemas/payments.schema';
import { USER_MODEL, User } from 'src/schemas/users.schema';
import { Model } from 'mongoose';
import { RequestConfirm, CommodityType, ResponseCreateLinkPayment, requestBodyForCreateLink } from 'src/types/CustomType';
import { UserClass } from 'src/users/class/User.class';
import { Course, COURSE_MODEL } from 'src/schemas/course.schema';
@Injectable()
export class PaymentsService {
    constructor(
        @InjectModel(COURSE_MODEL)
        private readonly courseModel: Model<Course> & SoftDeleteModel<Course>,
        @InjectModel(HISTORY_MODEL)
        private readonly historyModel: Model<History> & SoftDeleteModel<History>,
        @InjectModel(USER_MODEL)
        private readonly userModel: Model<User> & SoftDeleteModel<User>,
        @InjectModel(PAYMENT_MODEL)
        private readonly paymentModel: Model<Payments>,
    ) { }

    async handleGetLinkForPayment(query: { userId: string; courseId: string, type: string }) {
        const { userId, courseId, type } = query;

        const PayOS = require('@payos/node');
        const payos = new PayOS(
            'cbef30a1-36c0-4062-926c-94a2ff798465',
            '99520a1a-5c9c-4d44-aa54-4bae11d27767',
            '7169882514c4a20b4c593fa0143fcc69c5ffab0400cdf0270104c3dbac9acbf3',
        );
        const user = await this.userModel.findById(userId);
        const course = await this.courseModel.findById(courseId);
        if (!user) {
            throw new BadRequestException('User not exis');
        }
        if (!course) {
            throw new BadRequestException('Course not exis');
        }
        const { email, fullname } = user;

        const { name, price } = course;
        const numberPrice = Number(price.replace(/\./g, ''));
        const date = Math.floor(Date.now() / 1000 + 5 * 60);
        const requestData: requestBodyForCreateLink = {
            orderCode: Math.floor(Math.random() * 10000) + 1,
            amount: numberPrice,
            buyerName: fullname,
            buyerEmail: email,
            description: 'Thanh toán khóa học',
            items: [
                {
                    name: name,
                    quantity: 1,
                    price: numberPrice,
                },
            ],
            expiredAt: date,
            returnUrl: 'https://openlab.com.vn/products/courses/search-course',
            cancelUrl: 'https://openlab.com.vn/',
        };

        const createPaymentLink: ResponseCreateLinkPayment =
            await payos.createPaymentLink(requestData);
        console.log(createPaymentLink.paymentLinkId);

        if (createPaymentLink) {
            const paymentLinkId = createPaymentLink.paymentLinkId;
            if (paymentLinkId) {
                const newPayment = {
                    userId: userId,
                    paymentsLinkId: paymentLinkId,
                    productionType: type,
                    productionId: courseId
                };
                await this.paymentModel.create(newPayment);
            }
        }
        return {
            responseData: createPaymentLink,
        };
    }

    async handleConfirmPayment(info: RequestConfirm) {
        const { data, code, success, desc } = info;
        const { paymentLinkId, amount } = data;
        if (data && code === '00' && desc === 'success' && success === true) {
            const paymentData = await this.paymentModel.findOne({
                paymentsLinkId: paymentLinkId,
            });
            if (!paymentData) {
                return null;
            }
            const { userId, productionId, productionType } = paymentData
            const userData = await this.userModel.findById(userId);
            if (productionType === CommodityType.COURSE) {
                const listCourseBought = (userData as UserClass).courses;
                if (!listCourseBought.includes(productionId)) {
                    listCourseBought.push(productionId);
                    await userData?.save();
                    const newHistory = {
                        userId: userId,
                        commodityType: productionType,
                        moneyTraded: amount,
                        commodityId: productionId
                    }
                    await this.historyModel.create(newHistory)
                }
            }
            await this.paymentModel.findOneAndDelete({
                paymentsLinkId: paymentLinkId,
            });
        }
    }


}


