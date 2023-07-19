import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Payment{
    @Prop()
    payment:String
}

export const paymentSchema = SchemaFactory.createForClass(Payment);
