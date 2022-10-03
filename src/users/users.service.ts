import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // constructor(
  //   @InjectRepository(UserEntity)
  //   private userRepo: UsersRepository,
  // ) {}
  // /**
  //  * @description find a user with a given username
  //  * @returns {Promise<UserEntity>} user if found
  //  */
  // public async getUserByUsername(username: string): Promise<UserEntity> {
  //   return await this.userRepo.findOne({ where: { username } });
  // }
  // /**
  //  * @description find a user with a given userid
  //  * @returns {Promise<UserEntity>} user if found
  //  */
  // public async getUserByUserId(userId: string): Promise<UserEntity> {
  //   return await this.userRepo.findOne({ where: { id: userId } });
  // }
  // /**
  //  * @description create new user with given details
  //  * @return {Promise<UserEntity>} user if created
  //  */
  // public async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
  //   return await this.userRepo.create(user);
  // }
}
