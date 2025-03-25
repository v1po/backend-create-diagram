import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { Survey } from './survey.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Survey, User])],
  providers: [SurveyService],
  controllers: [SurveyController],
})
export class SurveyModule {}
