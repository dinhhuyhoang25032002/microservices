import { Controller, Get, HttpCode, HttpStatus, Inject, Param, Query, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('courses')
export class CoursesController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

  @Get(':slug')
  @HttpCode(HttpStatus.OK)
  async findOneCourse(
    @Param('slug') slug: string,
    @Query('isActive') query?: boolean,
  ) {
    return await firstValueFrom(this.natsClient.send("getInforCourse", { slug, query }));
  }

  @HttpCode(HttpStatus.OK)
  @Post('active')
  async findAllCourseActive(
    @Body() body: { userId: string; courseId?: Array<string> },
  ) {
    return await firstValueFrom(this.natsClient.send("getAllCourseActive", body));
  }
}
