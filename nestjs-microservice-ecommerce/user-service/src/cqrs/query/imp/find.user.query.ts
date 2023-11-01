import { IQuery } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class FindUserQuery implements IQuery {
  constructor(public readonly userId: Types.ObjectId) {}
}

