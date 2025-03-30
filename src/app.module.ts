import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyModule } from './survey/survey.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql.railway.internal',
      port: 8080,
      username: 'root',
      password: 'ARpRyoPugHaPqbXPRBVUAVZvTBLouWxU',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    SurveyModule,
  ],
})
export class AppModule { }
