import { Post as PrismaPost } from '@prisma/client';

export class Post implements PrismaPost {
  public id: number;

  public title: string;

  public body: string;

  public userId: number;
}
