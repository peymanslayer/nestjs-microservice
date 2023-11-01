import { ICommand } from '@nestjs/cqrs';
import { Types } from 'mongoose';
import { UpdateUserDto } from 'src/dtos/update.user.dto';

export class UpdateUserCommand implements ICommand {
  constructor(
    public readonly userId: Types.ObjectId,
    public readonly userDto: UpdateUserDto,
    
  ) {}
}
