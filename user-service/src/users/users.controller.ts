import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
@MessagePattern('handleAddValue')
async handleAddValue(@Payload() payload:{temperature:number,humidy:number,light:number,_id:string}){
return this.usersService.handleAddValue(payload)
}

}