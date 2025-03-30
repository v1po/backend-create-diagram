import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'; 

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: [
      'https://diagram-create-project-production.up.railway.app',
      'http://localhost:3000'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
    credentials: true,
  });

  app.set('trust proxy', 1);
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
}
bootstrap();
