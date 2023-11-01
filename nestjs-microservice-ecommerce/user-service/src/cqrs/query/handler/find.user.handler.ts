import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { UserRepo } from 'src/user.repository';
import { FindUserQuery } from '../imp/find.user.query';

@QueryHandler(FindUserQuery)
export class FindUserHandler implements IQueryHandler<FindUserQuery> {
  constructor(private readonly repository: UserRepo) {}
  async execute(command:FindUserQuery) {
    const {userId}=command
    const user = await this.repository.getUser(userId);
    return user;
  }
}
