import { Module } from '@nestjs/common';
import { ContactMailerController } from './contact-mailer.controller';

@Module({
  controllers: [ContactMailerController]
})
export class ContactMailerModule {}
