import { Injectable } from '@nestjs/common';

import { Post } from '@modules/posts/entities';
import { PrismaService } from '@shared/services';

import { FindUserDto, UpdateUserDto } from '../dto';
import { User } from '../entities';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  public async create(data: Omit<User, 'id'>): Promise<User> {
    return this.prisma.user.create({ data });
  }

  public async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  public async findOne(criteria: FindUserDto): Promise<User> {
    return this.prisma.user.findUnique({ where: criteria });
  }

  public async findUserPosts(userId: number): Promise<Post[]> {
    return this.prisma.post.findMany({ where: { userId } });
  }

  public async findUserFavoritePosts(userId: number): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: {
        users_favorite_posts: {
          some: { userId },
        },
      },
    });
  }

  public async favoritePost(userId: number, postId: number): Promise<void> {
    await this.prisma.usersFavoritePosts.create({ data: { postId, userId } });
  }

  public async update(id: number, data: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  public async delete(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
