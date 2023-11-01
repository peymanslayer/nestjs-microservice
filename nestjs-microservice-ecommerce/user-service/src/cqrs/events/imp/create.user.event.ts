import { IEvent } from '@nestjs/cqrs';
import { CreateUserDto } from 'src/dtos/create.user.dto';

export class CreateUserEvent implements IEvent {
  constructor(public readonly userDto: CreateUserDto) {}
}
