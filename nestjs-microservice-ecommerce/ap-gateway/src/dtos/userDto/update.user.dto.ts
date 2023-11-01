import { IsNotEmpty,IsNumber } from 'class-validator';

export class UpdateUserDto{
 @IsNotEmpty()
 password:string

 @IsNumber()
 number:number

 @IsNotEmpty()
 name:string

}