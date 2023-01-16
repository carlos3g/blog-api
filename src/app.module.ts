import { Module } from '@nestjs/common';

import { PrismaService } from '@shared/services/prisma.service';
import { UsersModule } from '@modules/users/users.module';

@Module({
  providers: [PrismaService],
  imports: [UsersModule],
})
export class AppModule {}
