/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller} from '@nestjs/common';
import {  ApiTags } from '@nestjs/swagger';
// import { userInfo } from 'os';

// import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

// export class UserCreateRequestBody {
//     @ApiProperty() username: string;
//     @ApiProperty() password: string;
//     @ApiPropertyOptional() name: string;
//     @ApiPropertyOptional() avatar: string;
//     @ApiPropertyOptional() bio: string;
// }
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  
  // @Get('/@:username')
  // async getUserByUsername(@Param('username') username: string): Promise<any> {
  //   const user = await this.userService.getUserByUsername(username);
  //   if (!user) {
  //     throw new NotFoundException('User not fo und');
  //   }
  //   return user;
  // }
  // @Get('/:userid')
  // async getUserByUserid(@Param('userid') userid: string): Promise<UserEntity> {
  //   const user = await this.userService.getUserByUserId(userid);
    
  //   if (!user) {
  //       throw new NotFoundException('User not found');
  //    }
  //       return user;
  // }
  
  // @Post('/')
  // async createNewUser(
  //   @Body() createUserRequest: UserCreateRequestBody,
  //   ): Promise<UserEntity> {
  //       const user = await this.userService.createUser(createUserRequest);
  //   return user;
  // }

  // @Patch('/:userid')
  // updateUserDetails(@Param('userid') userid: string): string {
  //   return `details of user (id = ${userid}) update`;
  // }

  // @Put('/:userid/follow')
  // followUser(): string {
  //   return 'you followed user';
  // }

  // @Delete('/:userid/follow')
  // unfollowUser(): string {
  //   return 'you unfollowed user';
  // }

  // @Get('/:userid/followers')
  // getFollowersOfUser(): string {
  //   return 'get followers of user'
  // }
   
}
