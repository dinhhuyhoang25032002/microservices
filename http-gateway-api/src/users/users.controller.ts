
import { ClientProxy } from '@nestjs/microservices';
import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Patch, Query, Res } from '@nestjs/common';
@Controller('users')
export class UsersController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }
    @Patch('add-value')
    @HttpCode(HttpStatus.OK)
    async addValue(@Body() info: {temperature:number,humidy:number,light:number,_id:string, nodeId:string}) {
        console.log(info);
        this.natsClient.send('handleAddValue', info);
        return {
            success: true,
        };
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getUserInfo (@Query() userId:string){
       return this.natsClient.send('handleGetUserInfo',userId)
    }
}
