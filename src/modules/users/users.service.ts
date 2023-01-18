import { Injectable } from '@nestjs/common';

import { hash } from 'bcryptjs';

import { Post } from '@modules/posts/entities';
import { slugify } from '@shared/utils';

import { CreateUserDto, FindUserDto, UpdateUserDto } from './dto';
import { User } from './entities';
import { UsersRepository } from './repositories';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  public async create(data: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(data.password, 8);
    const slug = slugify(data.name);

    return this.usersRepository.create({ ...data, slug, password: hashedPassword });
  }

  public async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  public async findOne(criteria: FindUserDto): Promise<User> {
    return this.usersRepository.findOne(criteria);
  }

  public async findUserFavoritePosts(userId: number): Promise<Post[]> {
    return this.usersRepository.findUserFavoritePosts(userId);
  }

  public async favoritePost(userId: number, postId: number): Promise<void> {
    await this.usersRepository.favoritePost(userId, postId);
  }

  public async findUserPosts(id: number): Promise<Post[]> {
    return this.usersRepository.findUserPosts(id);
  }

  public async update(id: number, data: UpdateUserDto): Promise<User> {
    const hashedPassword = data.password ? await hash(data.password, 8) : undefined;

    return this.usersRepository.update(id, { ...data, password: hashedPassword });
  }

  public async delete(id: number): Promise<boolean> {
    const user = await this.usersRepository.delete(id);

    if (user) {
      return true;
    }

    return false;
  }
}
