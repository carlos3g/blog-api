import { IsOptional, IsString, Length, IsNumberString } from 'class-validator';

import { Post } from '../entities/post.entity';

class CreatePostDto implements Omit<Post, 'id'> {
  @Length(3)
  public title: string;

  @IsString()
  public body: string;

  @IsOptional()
  @IsNumberString()
  public userId: number;
}

export { CreatePostDto };
