import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://diagram-create-project-production.up.railway.app', 
    methods: 'GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS',
  });

  await app.listen(3000); 
}
bootstrap();
