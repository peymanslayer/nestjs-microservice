import { Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dtos/create.user.dto';
import { UpdateUserDto } from './dtos/update.user.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './cqrs/commands/imp/create.user.command';
import { UpdateUserCommand } from './cqrs/commands/imp/update.user.command';
import { Types } from 'mongoose';
import { DeleteUserCommand } from './cqrs/commands/imp/delete.user.command';
import { FindAllUserQuery } from './cqrs/query/imp/findAll.users.query';
import { FindUserQuery } from './cqrs/query/imp/find.user.query';

@Injectable()
export class UserService {
  constructor(private commandBus: CommandBus,private queryBus:QueryBus) {}

  async inserOne(user: CreateUserDto): Promise<User> {
     const data=await this.commandBus.execute(new CreateUserCommand(user));
     return data
  }


  async updateOne(userId: Types.ObjectId, user: UpdateUserDto): Promise<User> {
    const data = await this.commandBus.execute(
      new UpdateUserCommand(userId, user),
    );
    return data;
  }

  async deleteOne(userId: Types.ObjectId): Promise<User> {
    const data = await this.commandBus.execute(new DeleteUserCommand(userId));
    return data;
  }

  async findAll(){
    const data=await this.queryBus.execute(new FindAllUserQuery());
    return data;
  }

  async findUser(userId: Types.ObjectId): Promise<User> {
    const data=await this.queryBus.execute(new FindUserQuery(userId));
    return data;
  }

}
