import { Module } from '@nestjs/common';

import { PrismaService } from './shared/services/prisma.service';

@Module({
  providers: [PrismaService],
})
export class AppModule {}
