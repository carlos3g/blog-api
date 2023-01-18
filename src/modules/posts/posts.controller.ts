import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';

import { Request } from 'express';

import { JwtAuthGuard } from '@modules/auth/guards';

import { CreateCommentDto, CreatePostDto, FindAllPostsDTO, UpdatePostDto } from './dto';
import { CommentsService, PostsService } from './services';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService, private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPostDto: CreatePostDto, @Req() req: Request) {
    return this.postsService.create({ ...createPostDto, userId: req.user.userId });
  }

  @Get()
  findAll(@Query() query: FindAllPostsDTO) {
    const userId = query.userId ? +query.userId : undefined;

    return this.postsService.findAll({ userId });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/comments')
  createComment(@Param('id') postId: string, @Body() createCommentDto: CreateCommentDto, @Req() req: Request) {
    const data = {
      ...createCommentDto,
      postId: +postId,
      userId: req.user.userId,
    };

    return this.commentsService.create(data);
  }

  @Get(':id/comments')
  findCommentsByPost(@Param('id') id: string) {
    return this.commentsService.findCommentsByPost(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto, @Req() req: Request) {
    return this.postsService.update(+id, req.user.userId, updatePostDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.postsService.delete(+id, req.user.userId);
  }
}
