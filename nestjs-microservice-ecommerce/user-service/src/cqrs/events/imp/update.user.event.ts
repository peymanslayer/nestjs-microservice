import { IEvent } from '@nestjs/cqrs';
import { Types } from 'mongoose';
import { UpdateUserDto } from 'src/dtos/update.user.dto';

export class UpdateUserEvent implements IEvent {
  constructor(
    public readonly userId: Types.ObjectId,
    public readonly userDto: UpdateUserDto
  ) {}
}
