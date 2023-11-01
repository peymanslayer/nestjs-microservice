import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { UserRepo } from 'src/user.repository';
import { FindAllUserQuery } from '../imp/findAll.users.query';

@QueryHandler(FindAllUserQuery)
export class FindAllUsersHandler implements IQueryHandler<FindAllUserQuery> {
  constructor(private readonly repository: UserRepo) {}
  async execute() {
    const user = await this.repository.getAllUser();
    return user;
  }
}
