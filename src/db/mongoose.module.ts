import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net')],
})
export class DbModule {}