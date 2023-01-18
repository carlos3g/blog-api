import { Controller, Get, Post, Body, Patch, Delete, UseGuards, Req, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Request } from 'express';

import { JwtAuthGuard } from '@modules/auth/guards';

import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id/posts')
  public async findUserPosts(@Param('id') id: string) {
    return this.usersService.findUserPosts(+id);
  }

  @Get(':id/favorites')
  public async findUserFavoritePosts(@Param('id') id: string) {
    return this.usersService.findUserFavoritePosts(+id);
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne({ id: +id });
    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  public update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+req.user.userId, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  public remove(@Req() req: Request) {
    return this.usersService.delete(+req.user.userId);
  }
}
