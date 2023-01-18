import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';

import { CreatePostDto, FindAllPostsDTO, UpdatePostDto } from '../dto';
import { PostsRepository } from '../repositories';

@Injectable()
export class PostsService {
  constructor(private postRepository: PostsRepository) {}

  public async create(createPostDto: CreatePostDto) {
    return this.postRepository.create(createPostDto);
  }

  public async findAll(criteria: FindAllPostsDTO) {
    return this.postRepository.findAll(criteria);
  }

  public async findOne(postId: number) {
    const post = await this.postRepository.findOne(postId);

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  public async update(postId: number, authenticatedUserId: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(postId);

    if (post.userId !== authenticatedUserId) {
      throw new ForbiddenException();
    }

    return this.postRepository.update(postId, updatePostDto);
  }

  public async delete(postId: number, authenticatedUserId: number) {
    const post = await this.findOne(postId);

    if (post.userId !== authenticatedUserId) {
      throw new ForbiddenException();
    }

    return this.postRepository.delete(postId);
  }
}
