import { Injectable } from '@nestjs/common';

import { Post } from '@modules/posts/entities/post.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  public async create(data: CreateUserDto): Promise<User> {
    return this.usersRepository.create(data);
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
    return this.usersRepository.update(id, data);
  }

  public async delete(id: number): Promise<boolean> {
    const user = await this.usersRepository.delete(id);

    if (user) {
      return true;
    }

    return false;
  }
}
