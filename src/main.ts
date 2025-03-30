import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'https://diagram-create-project-production.up.railway.app',
    methods: 'GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });
   app.set('trust proxy', 1);
  await app.listen(3000); 
}
bootstrap();
