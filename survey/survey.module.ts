import { Module } from '@nestjs/common';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';

@Module({
  controllers: [SurveyController],
  providers: [SurveyService]
})
export class SurveyModule {}
