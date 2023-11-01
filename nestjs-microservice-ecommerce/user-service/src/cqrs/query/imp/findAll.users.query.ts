import { IQuery } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class FindAllUserQuery implements IQuery {
  constructor() {}
}