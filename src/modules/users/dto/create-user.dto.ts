import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

import { User } from '../entities/user.entity';

export class CreateUserDto implements Omit<User, 'id' | 'slug'> {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  public name: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  public bio: string | null;

  @ApiProperty({ type: String })
  @IsEmail()
  public email: string;

  @ApiProperty({ type: String })
  @Length(8, 30)
  public password: string;
}
