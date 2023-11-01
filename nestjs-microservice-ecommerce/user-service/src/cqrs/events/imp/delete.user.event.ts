import { IEvent } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class DeleteUserEvent implements IEvent {
  constructor(public readonly userId: Types.ObjectId) {}
}
