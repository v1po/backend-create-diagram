import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyModule } from './survey/survey.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql.railway.internal',
      port: 3306,
      username: 'root',
      password: 'hYDbFzgNfvWoKelsfUoefkvQmQSoHeCb',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    SurveyModule,
  ],
})
export class AppModule { }
