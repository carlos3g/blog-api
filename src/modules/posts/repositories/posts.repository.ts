import { Injectable } from '@nestjs/common';

import { PrismaService } from '@shared/services';

import { CreatePostDto, FindAllPostsDTO, UpdatePostDto } from '../dto';
import { Post } from '../entities';

@Injectable()
export class PostsRepository {
  constructor(private prisma: PrismaService) {}

  public async create(data: CreatePostDto): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  public async findAll(criteria: FindAllPostsDTO): Promise<Post[]> {
    return this.prisma.post.findMany({ where: criteria });
  }

  public async findOne(id: number): Promise<Post> {
    return this.prisma.post.findUnique({ where: { id } });
  }

  public async update(id: number, data: UpdatePostDto): Promise<Post> {
    return this.prisma.post.update({ where: { id }, data });
  }

  public async delete(id: number): Promise<void> {
    await this.prisma.post.delete({ where: { id } });
  }
}
