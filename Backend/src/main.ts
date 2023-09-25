import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //for creating Nestjs app

  // Configure CORS settings
  app.enableCors({
    origin: 'http://localhost:3001', // frontend URL needed
    credentials: true, // cookies
  });

  await app.listen(3000);
}
bootstrap();