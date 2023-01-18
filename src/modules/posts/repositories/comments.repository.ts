import { Injectable } from '@nestjs/common';

import { PrismaService } from '@shared/services/prisma.service';

import { CreateCommentDto, UpdateCommentDto } from '../dto';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentsRepository {
  constructor(private prisma: PrismaService) {}

  public async create(data: CreateCommentDto): Promise<Comment> {
    const comment = this.prisma.comment.create({ data });

    return comment;
  }

  public async findAll(): Promise<Comment[]> {
    const comments = this.prisma.comment.findMany();

    return comments;
  }

  public async findOne(id: number): Promise<Comment> {
    const comment = this.prisma.comment.findUnique({ where: { id } });

    return comment;
  }

  public async findCommentsByPost(postId: number): Promise<Comment[]> {
    const comments = this.prisma.comment.findMany({ where: { postId } });

    return comments;
  }

  public async findCommentsByUser(userId: number): Promise<Comment[]> {
    const comments = this.prisma.comment.findMany({ where: { userId } });

    return comments;
  }

  public async update(id: number, data: UpdateCommentDto): Promise<Comment> {
    const comment = this.prisma.comment.update({ where: { id }, data });

    return comment;
  }

  public async delete(id: number): Promise<boolean> {
    const comment = await this.prisma.comment.delete({ where: { id } });

    if (comment) {
      return true;
    }

    return false;
  }
}
