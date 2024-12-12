
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, HttpStatus, Post, Put, Req, Res, UseGuards, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { PartialUser, UserClass } from '@users/class/User.class';
import { User } from '@schemas/users.schema';
// import { JwtAccessAuthGuard } from 'src/auth/guard/accessToken.guard'

//import { AuthGuard } from '@nestjs/passport';
@Controller()
//@UseGuards(AuthGuard('jwt'))
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    //GET /users
    @Get()
    findAll() {
        return this.userService.findAllUsers();
    }

    //GET /users/:id
    @Get(':id')
    findOneUser(@Param('id') id: string): Promise<User | null> {
        return this.userService.findOneUser(id);
    }

    //PATCH /users/:id 
    @Patch(':id')
    async updateInforUser(@Param('id') id: string, @Body() user: PartialUser) {
        return this.userService.updateInFoOneUser(id, user);
    }

    //PUT /user/:id
    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user: UserClass) {
        return this.userService.updateOneUser(id, user);
    }
    //DELETE /users/:id
    @Delete(':id')
    async deleteOneUser(@Param('id') id: string) {
        return this.userService.deleteOneUser(id);
    }
}
