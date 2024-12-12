
// import * as mongoose from 'mongoose';
// import * as MongooseDelete from 'mongoose-delete';
// import { UserInterface } from '@users/interface/User.interface';
// const UserChema = new mongoose.Schema(
//     {
//         email: { type: String, require: true, unique: true },
//         password: { type: String, require: true },
//         fullname: { type: String, require: true },
//         address: { type: String, require: true },
//         image: { type: String, require: true },
//         dateOfBirth: { type: String, require: true },
//     },
//     { timestamps: true }
// );

// UserChema.plugin(MongooseDelete, { deletedBy: true });

// export default UserChema;

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, ObjectId } from "mongoose"
@Schema({ timestamps: true })
export class User extends Document {

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: false, select: false })
    password: string;

    @Prop({ required: true })
    fullname: string;

    @Prop({ required: false })
    address: string;

    @Prop({ required: false })
    image?: string;

    @Prop({ required: false })
    dateOfBirth: string;

    @Prop({ required: false })
    provider: string;

    @Prop({ required: true })
    role: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }] })
    courses: Array<ObjectId>;

    @Prop({ required: false, unique: true })
    paymentsLinkId: Array<string>;
}

export const USER_MODEL = User.name;
export const UserSchema = SchemaFactory.createForClass(User);


