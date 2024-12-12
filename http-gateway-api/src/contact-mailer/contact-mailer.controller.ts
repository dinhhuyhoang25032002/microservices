import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('contact-mailer')
export class ContactMailerController {
    constructor(
        @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy
    ) { }
    @Post()
    @HttpCode(HttpStatus.OK)
    async sendEmail(@Body() body: { email: string, phone: string, name: string, topic: string, content: string }) {
        console.log(body);
        this.natsClient.emit('sendEmail', body)
        return {
            success: "true"
        }
    }
}
