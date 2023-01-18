import { ApiProperty } from '@nestjs/swagger';

import { IsOptional, IsString, Length, IsNumberString } from 'class-validator';

import { Post } from '../entities/post.entity';

class CreatePostDto implements Omit<Post, 'id'> {
  @ApiProperty({ type: String })
  @Length(3)
  public title: string;

  @ApiProperty({ type: String })
  @IsString()
  public body: string;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumberString()
  public userId: number;
}

export { CreatePostDto };
