import { Injectable } from '@nestjs/common';

import { hash } from 'bcryptjs';

import { PrismaService } from '@shared/services/prisma.service';
import { slugify } from '@shared/utils/slugify';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  public async create(data: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        ...data,
        slug: slugify(data.name),
        password: await hash(data.password, 8),
      },
    });

    return user;
  }

  public async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }

  public async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    return user;
  }

  public async update(id: number, data: UpdateUserDto): Promise<User> {
    const hashedPassword = data.password ? await hash(data.password, 8) : undefined;

    const user = await this.prisma.user.update({
      where: { id },
      data: {
        ...data,
        password: hashedPassword,
      },
    });

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
