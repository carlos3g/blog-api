import { Module } from '@nestjs/common';

import { PrismaService } from '@shared/services/prisma.service';

import { PostsController } from './posts.controller';
import { CommentsRepository } from './repositories/comments.repository';
import { PostsRepository } from './repositories/posts.repository';
import { CommentsService } from './services/comments.service';
import { PostsService } from './services/posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsRepository, CommentsRepository, CommentsService, PrismaService],
})
export class PostsModule {}
