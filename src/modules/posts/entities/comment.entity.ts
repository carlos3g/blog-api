import { Comment as PrismaComment } from '@prisma/client';

export class Comment implements PrismaComment {
  id: number;

  body: string;

  userId: number;

  postId: number;
}
