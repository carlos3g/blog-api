import { Injectable, UnauthorizedException } from '@nestjs/common';

import { CreateCommentDto, UpdateCommentDto } from '../dto';
import { CommentsRepository } from '../repositories/comments.repository';

@Injectable()
export class CommentsService {
  constructor(private commentRepository: CommentsRepository) {}

  async create(createCommentDto: CreateCommentDto) {
    return this.commentRepository.create(createCommentDto);
  }

  async findAll() {
    return this.commentRepository.findAll();
  }

  async findOne(commentId: number) {
    return this.commentRepository.findOne(commentId);
  }

  async findCommentsByPost(postId: number) {
    return this.commentRepository.findCommentsByPost(postId);
  }

  async findCommentsByUser(userId: number) {
    return this.commentRepository.findCommentsByUser(userId);
  }

  async update(commentId: number, userId: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.findOne(commentId);

    if (comment.userId !== userId) {
      throw new UnauthorizedException();
    }

    return this.commentRepository.update(commentId, updateCommentDto);
  }

  async delete(commentId: number, userId: number) {
    const comment = await this.findOne(commentId);

    if (comment.userId !== userId) {
      throw new UnauthorizedException();
    }

    return this.commentRepository.delete(commentId);
  }
}
