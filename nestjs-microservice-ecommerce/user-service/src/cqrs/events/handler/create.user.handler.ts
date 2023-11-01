import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { CreateUserEvent } from '../imp/create.user.event';
import { UserRepo } from 'src/user.repository';

@EventsHandler(CreateUserEvent)
export class CreateUserEventHandler implements IEventHandler<CreateUserEvent> {
  constructor(private readonly userRepository: UserRepo) {}
  async handle(event: CreateUserEvent) {
    await this.userRepository.createUser(event.userDto);
    console.log('ok');
    
  }
}
