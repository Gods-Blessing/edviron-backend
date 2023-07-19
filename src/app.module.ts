import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { DbModule } from './db/mongoose.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('uri'), StudentsModule],
})
export class AppModule {}
