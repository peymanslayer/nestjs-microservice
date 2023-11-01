import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto  {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNumber()
  number: number;

  @IsNotEmpty()
  name: string;
}
