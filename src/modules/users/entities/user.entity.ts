import { User as PrismaUser } from '@prisma/client';

export class User implements PrismaUser {
  public id: number;

  public name: string;

  public slug: string;

  public bio: string | null;

  public email: string;

  public password: string;
}
