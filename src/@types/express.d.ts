import { User as MyUser } from '@modules/users/entities/user.entity';

declare global {
  namespace Express {
    interface User {
      userId: number;
      email: string;
    }
  }
}
