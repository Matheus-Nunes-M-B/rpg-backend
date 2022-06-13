import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({}));

  const config = new DocumentBuilder()
    .setTitle('RPG API')
    .setDescription('Swagger API Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  writeFileSync('./swagger-spec.json', JSON.stringify(document));
  SwaggerModule.setup('doc', app, document);

  await app.listen(8000);


}
bootstrap();
