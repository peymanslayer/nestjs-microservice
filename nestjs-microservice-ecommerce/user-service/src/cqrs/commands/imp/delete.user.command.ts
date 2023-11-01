import { ICommand } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class DeleteUserCommand implements ICommand {
  constructor(public readonly userId: Types.ObjectId) {}
}
