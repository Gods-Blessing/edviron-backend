import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class feehead{
    @Prop()
    frequency_months:String
}

export const feeheadSchema = SchemaFactory.createForClass(feehead);
