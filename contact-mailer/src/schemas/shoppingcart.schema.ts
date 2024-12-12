import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, ObjectId } from 'mongoose'
interface Item {
    itemId: string
    type: string
}

@Schema({ timestamps: true })
export class ShoppingCart extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId: ObjectId

    @Prop({ type: [{ itemId: { type: mongoose.Schema.Types.ObjectId }, type: { type: String } }], _id: false })
    listItem?: Item[]
}

export const SHOPPING_CART_MODEL = ShoppingCart.name;
export const ShoppingCartSchema = SchemaFactory.createForClass(ShoppingCart)