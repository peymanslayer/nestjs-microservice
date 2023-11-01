/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CommandHandler,
  EventPublisher,
  ICommandHandler,
} from '@nestjs/cqrs';
import { CreateUserCommand } from '../imp/create.user.command';
import { UserRepo } from 'src/user.repository';
import { CreateUserEvent } from 'src/cqrs/events/imp/create.user.event';


@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private repository:UserRepo,
    private publisher:EventPublisher
  ) {}

  async execute(command: CreateUserCommand) {
    const { userDto } = command;
    const user = this.publisher.mergeObjectContext(
      await this.repository.createUser(userDto),
    );

    user.createdUser();
    return user

  }
}
