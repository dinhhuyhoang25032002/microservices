
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '@schemas/users.schema';
import { PartialUser, UserClass } from './class/User.class';
import { USER_MODEL } from '@schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'mongoose-delete';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(USER_MODEL)
        private readonly userModel:  SoftDeleteModel<User>,
    ) { }

    async findAllUsers(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findOneUser(id: string): Promise<User | null> {
        return this.userModel.findById(id).exec();
    }

    async updateInFoOneUser(id: string, User: PartialUser): Promise<string> {
        return this.userModel.findOneAndUpdate({ _id: id }, User, { strict: true }).exec()
            .then(() => ('Update User Info Successfully!'))
            .catch((e) => {
                throw new Error(e);
            })
    }

    async updateOneUser(id: string, user: UserClass): Promise<string> {
        return this.userModel.updateOne({ _id: id }, user).exec()
            .then(() => ("Update User Successfully!"))
            .catch((e) => {
                throw new Error(e);
            })
    }

    // async restoreOneUser(id: string) {
    //     return this.userModel
    // }

    // soft-delete
    async softDeleteOneUser(id: string) {
        return
    }
   

    async deleteOneUser(id: string): Promise<string> {
        return this.userModel.deleteOne({ _id: id }).exec()
            .then(() => ('Hard Delete User'))
            .catch((e) => {
                throw new Error(e);
            })
    }
}

