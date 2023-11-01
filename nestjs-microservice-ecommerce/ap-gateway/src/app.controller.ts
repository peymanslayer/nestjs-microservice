import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Res,
  Param,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './services/user.service';
import { CreateUserDto } from './dtos/userDto/create.user.dto';
import { UpdateUserDto } from './dtos/userDto/update.user.dto';
import { FindUserDto } from './dtos/userDto/find.user.dto';
import { Types } from 'mongoose';
@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post('/api/createUser')
  async insertUser(@Body() user: CreateUserDto, @Res() response: Response) {
    const result = await this.userService.insertUser(user);
    response.status(201).json(result);
  }

  @Get('/api/findUser')
  async findUser(@Body() user: FindUserDto, @Res() response: Response) {
    const result = await this.userService.findUser(user);
    response.status(201).json(result);
  }

  @Get('/api/findAllUsers')
  async FindAllUsers(@Res() response: Response) {
    const result = await this.userService.findAllUsers();
    response.status(201).json(result);
  }

  @Put('/api/updateUser/:id')
  async UpdateUser(
    @Body() user: UpdateUserDto,
    @Res() response: Response,
    @Param('id') userId: Types.ObjectId,
  ) {
    const result = await this.userService.updateUser(user, userId);
    response.status(201).json(result);
  }

  @Delete('api/deleteUser')
  async deleteUser(@Body() userId : Types.ObjectId, @Res() response: Response) {
    const result = await this.userService.deleteUser(userId);
    response.status(201).json(result);
  }
}
