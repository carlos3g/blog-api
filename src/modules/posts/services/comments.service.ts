import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { CreateCommentDto, UpdateCommentDto } from '../dto';
import { CommentsRepository } from '../repositories';

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
    const comment = await this.commentRepository.findOne(commentId);

    if (!comment) {
      throw new NotFoundException();
    }

    return comment;
  }

  async findCommentsByPost(postId: number) {
    return this.commentRepository.findCommentsByPost(postId);
  }

  async findCommentsByUser(userId: number) {
    return this.commentRepository.findCommentsByUser(userId);
  }

  async update(commentId: number, authenticatedUserId: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.findOne(commentId);

    if (comment.userId !== authenticatedUserId) {
      throw new UnauthorizedException();
    }

    return this.commentRepository.update(commentId, updateCommentDto);
  }

  async delete(commentId: number, authenticatedUserId: number) {
    const comment = await this.findOne(commentId);

    if (comment.userId !== authenticatedUserId) {
      throw new UnauthorizedException();
    }

    return this.commentRepository.delete(commentId);
  }
}
