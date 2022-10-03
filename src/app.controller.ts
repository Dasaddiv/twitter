/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class AppController {
  @Get('/@:username')
  getUserByUsername(@Param('username') username: string): string {
    // TODO: add actual logic
    return 'details of username = ${username}';
  }

  @Get('/:userId')
  getUserByUserid(@Param('userId') userId: string): string {
    // TODO: add actual logic
    return 'details of user id = ${userId}';
  }
}
