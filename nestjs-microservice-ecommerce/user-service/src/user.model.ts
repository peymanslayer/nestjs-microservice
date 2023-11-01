import { CreateUserEvent } from './cqrs/events/imp/create.user.event';
import { DeleteUserEvent } from './cqrs/events/imp/delete.user.event';
import { UpdateUserEvent } from './cqrs/events/imp/update.user.event';
import { AggregateRoot } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class UserRoot extends AggregateRoot  {
  private data: any;
  constructor(private readonly id: Types.ObjectId | undefined) {
    super();
    this.autoCommit = true;
  }

  setData(data: any) {
    this.data = data;
  }

  createdUser() {
    this.apply(new CreateUserEvent(this.data));
  }

  updatedUser() {
    this.apply(new UpdateUserEvent(this.id, this.data));
  }

  deletedUser() {
    this.apply(new DeleteUserEvent(this.data));
  }


}
