import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  public async create(data: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.create(data);

    return user;
  }

  public async findAll(): Promise<User[]> {
    const users = await this.usersRepository.findAll();

    return users;
  }

  public async findOne(criteria: FindUserDto): Promise<User> {
    const user = await this.usersRepository.findOne(criteria);

    return user;
  }

  public async update(id: number, data: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.update(id, data);

    return user;
  }

  public async delete(id: number): Promise<boolean> {
    const user = await this.usersRepository.delete(id);

    if (user) {
      return true;
    }

    return false;
  }
}
