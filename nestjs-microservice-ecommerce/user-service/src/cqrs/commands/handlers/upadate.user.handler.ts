import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../imp/update.user.command';
import { UserRepo } from 'src/user.repository';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: UserRepo,
  ) {}
  async execute(command: UpdateUserCommand) {
    const { userId, userDto } = command;
    const user = this.publisher.mergeObjectContext(
      await this.repository.updateUser(userId, userDto),
    );
    user.updatedUser();
    return user;
  }
}
