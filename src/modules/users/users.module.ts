import { Module } from '@nestjs/common';

import { PrismaService } from '@shared/services/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/users.repository';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService, UsersRepository],
})
export class UsersModule {}
