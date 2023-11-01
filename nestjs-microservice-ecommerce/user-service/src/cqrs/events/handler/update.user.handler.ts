import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { UpdateUserEvent } from '../imp/update.user.event';
import { UserRepo } from 'src/user.repository';

@EventsHandler(UpdateUserEvent)
export class UpdateUserEventHandler implements IEventHandler<UpdateUserEvent> {
  constructor(private readonly userRepository: UserRepo) {}
  async handle(event: UpdateUserEvent) {
    const { userId, userDto } = event;
    await this.userRepository.updateUser(userId, userDto);
  }
}