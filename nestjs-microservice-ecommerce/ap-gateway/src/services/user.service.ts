import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';
import { Inject } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/userDto/create.user.dto';
import { FindUserDto } from 'src/dtos/userDto/find.user.dto';
import { UpdateUserDto } from 'src/dtos/userDto/update.user.dto';
import { UserDto } from 'src/dtos/userDto/user.dto';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  async insertUser(user: CreateUserDto): Promise<UserDto> {
    const insertUser = await this.client.send('insertUser', user).toPromise();
    console.log(insertUser);

    return insertUser;
  }

  async findUser(user: FindUserDto): Promise<UserDto | string> {
    const findUser = await this.client.send('findUser', user).toPromise();
    return findUser;
  }

  async findAllUsers(): Promise<UserDto[]> {
    const findAllUsers = await this.client.send('findAllUsers', '').toPromise();
    return findAllUsers;
  }

  async updateUser(
    user: UpdateUserDto,
    userId: Types.ObjectId,
  ): Promise<UserDto> {
    const updateUser = await this.client
      .send('updateUser', { userId, user })
      .toPromise();
    return updateUser;
  }

  async deleteUser(userId: Types.ObjectId): Promise<any> {
    const deleteUser = await this.client.send('deleteUser', userId).toPromise();
    return deleteUser;
  }
}
