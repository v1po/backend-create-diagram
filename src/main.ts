import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Укажите домен фронтенда
    methods: 'GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS', // Разрешённые HTTP-методы
    credentials: true, // Если нужно передавать cookie
  });

  await app.listen(process.env.PORT || 3000); // Укажите порт
}
bootstrap();
