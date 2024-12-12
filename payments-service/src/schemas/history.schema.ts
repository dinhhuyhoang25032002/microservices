import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import mongoose, { Document, ObjectId } from 'mongoose'
import { CommodityType } from 'src/types/CustomType'
@Schema({ timestamps: true })

export class History extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" })
    userId: ObjectId

    @Prop({ required: true, enum: CommodityType, type: String })
    commodityType: CommodityType

    @Prop({ required: true })
    moneyTraded: string

    @Prop({ type: String, required: true })
    commodityId: string
}

export const HISTORY_MODEL = History.name;
export const HistorySchema = SchemaFactory.createForClass(History)
HistorySchema.index({ create: 1 }, { expires: '30d' })