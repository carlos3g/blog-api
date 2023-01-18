import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { IsNumber, IsOptional, Length } from 'class-validator';

import { Comment } from '../entities/comment.entity';

class CreateCommentDto implements Omit<Comment, 'id'> {
  @ApiProperty({ type: String })
  @Length(1)
  body: string;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @IsNumber()
  userId: number;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @IsNumber()
  postId: number;
}

export { CreateCommentDto };
