import { OmitType, PartialType } from '@nestjs/mapped-types';

import { CreateCommentDto } from './create-comment.dto';

class UpdateCommentDto extends PartialType(OmitType(CreateCommentDto, ['userId', 'postId'])) {}

export { UpdateCommentDto };
