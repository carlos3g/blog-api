import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

import { User } from '../entities/user.entity';

export class CreateUserDto implements Omit<User, 'id' | 'slug'> {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsOptional()
  public bio: string | null;

  @IsEmail()
  public email: string;

  @Length(8, 30)
  public password: string;
}
