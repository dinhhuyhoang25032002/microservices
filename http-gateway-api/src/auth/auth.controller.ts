import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PartialUser, UserClass } from 'src/users/class/User.class';
import { firstValueFrom } from 'rxjs';
import { Response, Request, query } from 'express';
import { JwtRefreshAuthGuard } from 'src/auth/guard/refreshToken.guard';
import { GoogleAuthGuard } from 'src/auth/guard/google.guard';
import { UserFromGoogle } from 'src/types/CustomType';
@Controller('auth')
export class AuthsController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() user: PartialUser, @Res({ passthrough: true }) res: Response) {
        const result = await firstValueFrom(this.natsClient.send('handleLogin', user));
        res.cookie('token', result.refreshToken,
            { httpOnly: true, secure: true, sameSite: "none", expires: new Date(Date.now() + 604800000), partitioned: true });
        return { ...result, refreshToken: undefined };
    }

    @Post('sign-up')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() user: UserClass) {
        return await firstValueFrom(this.natsClient.send('handleRegister', user))
    }

    @HttpCode(HttpStatus.OK)
    @Get('logout')
    async logout(@Res({ passthrough: true }) res: Response) {
        res.cookie('token',
            { httpOnly: true, secure: true, sameSite: "none", expires: new Date(Date.now() + 604800000), partitioned: true });
        return { message: 'Logged out succefully' };
    }



    @UseGuards(GoogleAuthGuard)
    @Get('google/login')
    loginWithGoogle() {
        return { msg: 'Login With Google Successfully' }
    }

    @UseGuards(GoogleAuthGuard)
    @Get('google/redirect')
    @HttpCode(HttpStatus.OK)
    async handleRedirect(@Req() req: Request, @Res({ passthrough: true }) res: Response) {

        const user = req.user as UserFromGoogle
        if (!user) {
            return { message: 'Authentication with Google failed!' }
        }
        console.log(user);

        const { accessToken, refreshToken } = await firstValueFrom(this.natsClient.send('handleLoginWithGoogle', user))
        res.cookie('token', refreshToken,
            { httpOnly: true, secure: true, sameSite: "none", expires: new Date(Date.now() + 604800000), partitioned: true, domain: 'localhost' });

        res.redirect(`http://localhost:3000/auth?token=${accessToken}`)

    }

    @UseGuards(JwtRefreshAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get('refresh-token')
    async refreshToken(@Req() req: Request) {
        const jwt = req.user as { sub: string; email: string }
        return await firstValueFrom(this.natsClient.send('handleRefreshToken', jwt));
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    async getInfor(@Query() query: { id: string, email: string }, @Res({ passthrough: true }) res: Response) {
        const {
            data, refreshToken
        } = await firstValueFrom(this.natsClient.send('handleGetInfor', query));
        console.log(refreshToken);
        
        res.cookie('token', refreshToken,
            { httpOnly: true, secure: true, sameSite: "none", expires: new Date(Date.now() + 604800000), partitioned: true, domain: 'localhost' });

        return data

    }
}
