import { Module } from '@nestjs/common';
import { MailerController } from './mailer.controller';
import { MailerService } from './mailer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_MODEL,UserSchema } from 'src/schemas/users.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name: USER_MODEL,
      schema: UserSchema
    }
  ])],
  controllers: [MailerController],
  providers: [MailerService]
})
export class MailerModule {}
