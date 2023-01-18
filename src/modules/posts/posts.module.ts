import { Module } from '@nestjs/common';

import { PrismaService } from '@shared/services';

import { PostsController } from './posts.controller';
import { CommentsRepository, PostsRepository } from './repositories';
import { CommentsService, PostsService } from './services';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsRepository, CommentsRepository, CommentsService, PrismaService],
})
export class PostsModule {}
