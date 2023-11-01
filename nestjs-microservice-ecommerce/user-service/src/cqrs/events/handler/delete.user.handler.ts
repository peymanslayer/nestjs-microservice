import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { DeleteUserEvent } from '../imp/delete.user.event';
import { UserRepo } from 'src/user.repository';

@EventsHandler(DeleteUserEvent)
export class DeleteUserEventHandler implements IEventHandler<DeleteUserEvent> {
  constructor(private readonly userRepository: UserRepo) {}
  async handle(event: DeleteUserEvent) {
    await this.userRepository.DeleteUser(event.userId);
  }
}