import { IsNumber, IsOptional, Length } from 'class-validator';

import { Comment } from '../entities/comment.entity';

class CreateCommentDto implements Omit<Comment, 'id'> {
  @Length(1)
  body: string;

  @IsOptional()
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsNumber()
  postId: number;
}

export { CreateCommentDto };
