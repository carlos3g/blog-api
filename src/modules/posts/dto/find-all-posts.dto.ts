import { PickType, PartialType } from '@nestjs/mapped-types';

import { CreatePostDto } from './create-post.dto';

class FindAllPostsDTO extends PartialType(PickType(CreatePostDto, ['userId'])) {}

export { FindAllPostsDTO };
