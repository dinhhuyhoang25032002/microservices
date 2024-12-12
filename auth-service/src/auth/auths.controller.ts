import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { PartialUser, UserClass } from '@users/class/User.class';

import { AuthsService } from 'src/auth/auths.service';
import { UserFromGoogle } from 'src/types/CustomType';

@Controller()
export class AuthsController {
    constructor(private readonly authService: AuthsService) { }
    @MessagePattern('handleLogin')
    handleLogin(@Payload() user: PartialUser) {
        return this.authService.handleLogin(user)
    }

    @MessagePattern('handleRegister')
    async create(@Payload() user: UserClass) {
        return this.authService.createOneUser(user);
    }


    @MessagePattern('findUser')
    async findUser(@Payload() email: string) {
        return this.authService.findUser(email);
    }

    @MessagePattern('handleLoginWithGoogle')
    async handleRedirect(@Payload() user: UserFromGoogle,) {
        console.log(user);

        return await this.authService.handleLoginWithGoogle(user)
    }

    @MessagePattern('handleRefreshToken')
    refreshToken(@Payload() jwt: { sub: string; email: string }) {
        return this.authService.refreshToken(jwt);
    }

    @MessagePattern('handleGetInfor')
    getInfor(@Payload() query: { id: string, email: string }) {
        return this.authService.handleGetInfor(query)
    }
}
