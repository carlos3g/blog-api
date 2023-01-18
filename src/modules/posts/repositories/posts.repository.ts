import { Injectable } from '@nestjs/common';

import { PrismaService } from '@shared/services';

import { CreatePostDto, FindAllPostsDTO, UpdatePostDto } from '../dto';
import { Post } from '../entities';

@Injectable()
export class PostsRepository {
  constructor(private prisma: PrismaService) {}

  public async create(data: CreatePostDto): Promise<Post> {
    const post = this.prisma.post.create({ data });

    return post;
  }

  public async findAll(criteria: FindAllPostsDTO): Promise<Post[]> {
    const posts = this.prisma.post.findMany({ where: criteria });

    return posts;
  }

  public async findOne(id: number): Promise<Post> {
    const post = this.prisma.post.findUnique({ where: { id } });

    return post;
  }

  public async update(id: number, data: UpdatePostDto): Promise<Post> {
    const post = this.prisma.post.update({ where: { id }, data });

    return post;
  }

  public async delete(id: number): Promise<boolean> {
    const post = await this.prisma.post.delete({ where: { id } });

    if (post) {
      return true;
    }

    return false;
  }
}
