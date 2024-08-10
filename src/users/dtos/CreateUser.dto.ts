import { IsNotEmpty, IsEmail } from 'class-validator';

//data transfer object
export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
