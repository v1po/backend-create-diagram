import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyModule } from './survey/survey.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'survey_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    SurveyModule,
  ],
})
export class AppModule { }
