import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { DeleteUserCommand } from '../imp/delete.user.command';
import { UserRepo } from 'src/user.repository';

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: UserRepo,
  ) {}
 async execute(command: DeleteUserCommand) {
    const {userId}=command;
    const user=this.publisher.mergeObjectContext(await this.repository.DeleteUser(userId));
    user.deletedUser();
    return user;
  }
}
