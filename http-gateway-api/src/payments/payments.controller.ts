import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post, Query, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RequestConfirm } from 'src/types/CustomType';

@Controller('payments')
export class PaymentsController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

    @Get('get-link')
    @HttpCode(HttpStatus.CREATED)
    async handleGetLinkForPayment(
        @Query() query: { userId: string; courseId: string, type: string },
    ) {
        return await firstValueFrom(this.natsClient.send("handleGetLinkForPayment", query));
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    async handleConfirmPayment(@Body() info: RequestConfirm) {
        console.log(info);
        this.natsClient.emit('handleConfirmPayment', info);
        return {
            success: true,
        };
    }
}
