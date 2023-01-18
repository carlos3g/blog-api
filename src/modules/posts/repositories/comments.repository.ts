import { Injectable } from '@nestjs/common';

import { PrismaService } from '@shared/services';

import { CreateCommentDto, UpdateCommentDto } from '../dto';
import { Comment } from '../entities';

@Injectable()
export class CommentsRepository {
  constructor(private prisma: PrismaService) {}

  public async create(data: CreateCommentDto): Promise<Comment> {
    return this.prisma.comment.create({ data });
  }

  public async findAll(): Promise<Comment[]> {
    return this.prisma.comment.findMany();
  }

  public async findOne(id: number): Promise<Comment> {
    return this.prisma.comment.findUnique({ where: { id } });
  }

  public async findCommentsByPost(postId: number): Promise<Comment[]> {
    return this.prisma.comment.findMany({ where: { postId } });
  }

  public async findCommentsByUser(userId: number): Promise<Comment[]> {
    return this.prisma.comment.findMany({ where: { userId } });
  }

  public async update(id: number, data: UpdateCommentDto): Promise<Comment> {
    return this.prisma.comment.update({ where: { id }, data });
  }

  public async delete(id: number): Promise<void> {
    await this.prisma.comment.delete({ where: { id } });
  }
}
