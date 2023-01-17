import { Controller, Get, Post, Body, Patch, Delete, UseGuards, Req, Param } from '@nestjs/common';

import { Request } from 'express';

import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id/posts')
  public async findUserPosts(@Param('id') id: string) {
    const posts = await this.usersService.findUserPosts(+id);

    return posts;
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
