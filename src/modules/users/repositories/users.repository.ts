import { Injectable } from '@nestjs/common';

import { Post } from '@modules/posts/entities';
import { PrismaService } from '@shared/services';

import { FindUserDto, UpdateUserDto } from '../dto';
import { User } from '../entities';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  public async create(data: Omit<User, 'id'>): Promise<User> {
    const user = await this.prisma.user.create({ data });

    return user;
  }

  public async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }

  public async findOne(criteria: FindUserDto): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: criteria });

    return user;
  }

  public async findUserPosts(userId: number): Promise<Post[]> {
    const posts = await this.prisma.post.findMany({ where: { userId } });

    return posts;
  }

  public async findUserFavoritePosts(userId: number): Promise<Post[]> {
    const posts = await this.prisma.post.findMany({
      where: {
        users_favorite_posts: {
          some: { userId },
        },
      },
    });

    return posts;
  }

  public async favoritePost(userId: number, postId: number): Promise<void> {
    await this.prisma.usersFavoritePosts.create({ data: { postId, userId } });
  }

  public async update(id: number, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({ where: { id }, data });

    return user;
  }

  public async delete(id: number): Promise<boolean> {
    const user = await this.prisma.user.delete({ where: { id } });

    if (user) {
      return true;
    }

    return false;
  }
}
