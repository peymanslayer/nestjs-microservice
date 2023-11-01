import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserRepo } from './user.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './cqrs/commands/handlers/create.user.handler';
import { CreateUserEventHandler } from './cqrs/events/handler/create.user.handler';
import { UpdateUserEventHandler } from './cqrs/events/handler/update.user.handler';
import { UpdateUserHandler } from './cqrs/commands/handlers/upadate.user.handler';
import { DeleteUserHandler } from './cqrs/commands/handlers/delete.user.handler';
import { DeleteUserEventHandler } from './cqrs/events/handler/delete.user.handler';
import { FindAllUsersHandler } from './cqrs/query/handler/findAll.users.handler';
import { FindUserHandler } from './cqrs/query/handler/find.user.handler';

export const CommandHandlers = [CreateUserHandler,UpdateUserHandler,DeleteUserHandler];
export const EventHandlers = [CreateUserEventHandler,UpdateUserEventHandler,DeleteUserEventHandler];
export const QueryHandlers=[FindAllUsersHandler,FindUserHandler]
@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),   
  ],
  controllers: [UserController],
  providers: [UserService,UserRepo, ...CommandHandlers, ...EventHandlers,...QueryHandlers],
  exports:[MongooseModule]
})

export class AppModule{}