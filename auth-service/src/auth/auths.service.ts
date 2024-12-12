import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';
import { Model } from 'mongoose';
import { User, USER_MODEL } from '@schemas/users.schema';
import { PartialUser } from '@users/class/User.class';
import { hardData, compareData } from 'src/util/bcrypt';
import { getToken } from 'src/util/auth';
import { UserFromGoogle } from 'src/types/CustomType';
@Injectable()
export class AuthsService {
    constructor(
        @InjectModel(USER_MODEL)
        private readonly userModel: Model<User>,
    ) { }
    async findUser(email: string) {
        const user = await this.userModel.findOne({ email: email });
        return user;
    }

    async createOneUser(user: PartialUser) {
        let { email, password } = user
        if (!email || !password) {
            return new BadRequestException('Email or Password not empty');
        }
        const userExist = await this.userModel.findOne({ email: email })
        if (!userExist) {
            const passwordhard = await hardData(password);
            const UserSave = {
                ...user,
                password: passwordhard,
                role: 'user',
            }
            await new this.userModel(UserSave).save({ validateBeforeSave: true })
                .catch((e) => {
                    throw new Error(e);
                });
            return { message: 'User created succefully' };
        }
        return new BadRequestException('Email already exists');
    }

    async handleLogin(user: PartialUser) {
        try {
            console.log('check user:', user);
            const { email, password } = user
            let User = await this.userModel.findOne({ email: email }).select('+password').exec();

            if (!User) {
                return { errmessage: new BadRequestException('Wrong credentials') }

            }
            if (!User.password && User.provider !== null) {
                return { errmessage: new BadRequestException('user is exised') }

            }
            //Validate password
            console.log(User);

            let checkPassword = await compareData(password as string, User.password);
            if (!checkPassword) {
                return new ForbiddenException("Wrong password");
            }
            const userObject = User.toObject();
            delete userObject.password;
            const { accessToken, refreshToken } = await getToken((User._id) as string, User.email);
            return {
                ...userObject,
                accessToken: accessToken,
                refreshToken
            };
        } catch (e) {
            throw new Error(e);
        }
    }
    async handleLoginWithGoogle(user: UserFromGoogle) {
        try {
            const { email } = user;
            console.log(email);

            let dataUser = await this.userModel.findOne({ email }).exec();
            console.log(dataUser);

            if (!dataUser) {
                dataUser = await this.userModel.create(user);
            }
            const { accessToken, refreshToken } = await getToken(dataUser._id as string, dataUser.email);
            return {
                accessToken, refreshToken
            }

        } catch (error) {
            throw new Error('Error processing Google login.');
        }
    }

    async refreshToken(jwt: { sub: string; email: string }) {
        const { sub, email } = jwt;
        const { accessToken } = await getToken(sub, email);
        return {
            accessToken,
        };
    }

    async handleGetInfor(query: { id: string, email: string }) {
        const { id, email } = query
        const { refreshToken } = await getToken(id, email);
        const data = await this.userModel.findById(id)
        return {
            data, refreshToken
        }
    }
}


