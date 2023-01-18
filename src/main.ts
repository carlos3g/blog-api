import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { PrismaService } from '@shared/services';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setLicense('MIT', 'https://github.com/carlos3g/blog-api/blob/main/LICENSE')
    .setContact('Carlos Mesquita', 'https://carlos3g.github.io', 'carlosmesquita156@gmail.com')
    .setDescription('Blog api feita com NestJs por @carlos3g')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}
void bootstrap();
