/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';


export class UsersRepository extends Repository<UserEntity> {}

