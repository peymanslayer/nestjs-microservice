import { CreateUserDto } from "./create.user.dto";

export class UserDto implements CreateUserDto{
    email: string;
    password: string;
    number: number;
    name: string;
}