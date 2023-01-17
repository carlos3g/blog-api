import { Injectable, UnauthorizedException } from '@nestjs/common';

import { CreatePostDto, FindAllPostsDTO, UpdatePostDto } from './dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private postRepository: PostsRepository) {}

  async create(createPostDto: CreatePostDto) {
    return this.postRepository.create(createPostDto);
  }

  async findAll(criteria: FindAllPostsDTO) {
    return this.postRepository.findAll(criteria);
  }

  async findOne(postId: number) {
    return this.postRepository.findOne(postId);
  }

  async update(postId: number, userId: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(postId);

    if (post.userId !== userId) {
      throw new UnauthorizedException();
    }

    return this.postRepository.update(postId, updatePostDto);
  }

  async delete(postId: number, userId: number) {
    const post = await this.findOne(postId);

    if (post.userId !== userId) {
      throw new UnauthorizedException();
    }

    return this.postRepository.delete(postId);
  }
}
