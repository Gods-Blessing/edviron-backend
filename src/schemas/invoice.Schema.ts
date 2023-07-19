import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Invoice{
    @Prop()
    frequency_months:String
}

export const invoiceSchema = SchemaFactory.createForClass(Invoice);
