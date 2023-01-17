import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';

import { Request } from 'express';

import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

import { PostsService } from './posts.service';
import { CreatePostDto, FindAllPostsDTO, UpdatePostDto } from './dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

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
