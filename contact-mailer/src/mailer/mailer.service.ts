import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, USER_MODEL } from 'src/schemas/users.schema';
import { Model } from 'mongoose';
import { google } from 'googleapis';
import * as nodemailer from 'nodemailer';
import { UserClass } from 'src/users/class/User.class';
@Injectable()
@Injectable()
export class MailerService {
    private oAuth2Client: google.auth.OAuth2;

    constructor(
        @InjectModel(USER_MODEL)
        private readonly userModel: Model<User>,
    ) {
        // Khởi tạo OAuth2Client
        this.oAuth2Client = new google.auth.OAuth2(
            process.env.CLIENT_AUTH_GOOGLE_ID,
            process.env.CLIENT_AUTH_GOOGLE_SECRET,
            process.env.REDIRECT_URL,
        );
        // Đặt credentials
        this.oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
    }

    async handleSendEmail(payload: { email: string }) {
        const { email } = payload;

        // Tìm user trong database
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new HttpException(
                { message: 'Resource not found: user', errorCode: 404 },
                HttpStatus.NOT_FOUND,
            );
        }
        const { fullname } = user as UserClass;
        try {
            // Lấy access token
            const accessToken = await this.oAuth2Client.getAccessToken();
            if (!accessToken.token) {
                throw new Error('Failed to get access token');
            }

            // Cấu hình transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: process.env.SENDER_EMAIL,
                    clientId: process.env.CLIENT_AUTH_GOOGLE_ID,
                    clientSecret: process.env.CLIENT_AUTH_GOOGLE_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN,
                    accessToken: accessToken.token,
                },
            });

            // Tạo nội dung email
            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: 'Phản hồi từ OpenLAB',
                html: `
                <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333;">
                    <p>Xin chào <strong>${fullname}</strong>,</p>
                    <p>
                        Cảm ơn bạn đã đóng góp ý kiến cho OpenLAB. Chúng tôi đã tiếp nhận ý kiến
                        của bạn và sẽ phản hồi trong vòng 24 giờ.
                    </p>
                    <p>
                        Nếu bạn có thêm bất kỳ câu hỏi nào, vui lòng liên hệ qua email
                        này. <strong style="color: #074069">openlab.user@gmail.com</strong>
                    </p>
                    <br />
                    <p>Trân trọng,</p>
                    <p><strong>Đội ngũ OpenLAB</strong></p>
                    <hr />
                    <footer style="font-size: 14px; color: #888;">
                        <p>Đây là email tự động, vui lòng không trả lời email này.</p>
                    </footer>
                </div>`,
            };

            // Gửi email
            const result = await transporter.sendMail(mailOptions);
            console.log({ message: 'Email sent successfully', result });
            return { message: 'Email sent successfully', result };
        } catch (error) {
            console.error('Error sending email:', error);
            throw new HttpException(
                { message: 'Failed to send email', error: error.message },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async handleSendNotification(payload: { email: string; value: string; nodeId: string; type: string }) {
        const {email,value,nodeId,type}= payload
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new HttpException(
                { message: 'Resource not found: user', errorCode: 404 },
                HttpStatus.NOT_FOUND,
            );
        }
        const { fullname } = user as UserClass;
        try {
            
            // Lấy access token
            const accessToken = await this.oAuth2Client.getAccessToken();
            if (!accessToken.token) {
                throw new Error('Failed to get access token');
            }

            // Cấu hình transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: process.env.SENDER_EMAIL,
                    clientId: process.env.CLIENT_AUTH_GOOGLE_ID,
                    clientSecret: process.env.CLIENT_AUTH_GOOGLE_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN,
                    accessToken: accessToken.token,
                },
            });

            // Tạo nội dung email
            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: 'Cảnh báo từ MKAdmin',
                html: `
                <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333;">
                    <p>Xin chào <strong>${fullname}</strong>,</p>
                    <p>
                        Dữ liệu ${type} tại ${nodeId} đang là ${value}. Đã vượt qua giá trị của ngưỡng cho phép, bạn nên để chế độ tự động hoặc kiểm tra dữ liệu tại node của mình!
                    </p>
                   
                    <br />
                    <p>Trân trọng,</p>
                    <p><strong>Đội ngũ MKAdmin</strong></p>
                    <hr />
                    <footer style="font-size: 14px; color: #888;">
                        <p>Đây là email tự động, vui lòng không trả lời email này.</p>
                    </footer>
                </div>`,
            };

            // Gửi email
            const result = await transporter.sendMail(mailOptions);
            console.log({ message: 'Email sent successfully', result });
            return { message: 'Email sent successfully', result };
        } catch (error) {
            console.error('Error sending email:', error);
            throw new HttpException(
                { message: 'Failed to send email', error: error.message },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}

