import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './survey/survey.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
  ) {}

  create(survey: Survey): Promise<Survey> {
    return this.surveyRepository.save(survey);
  }

  findAll(): Promise<Survey[]> {
    return this.surveyRepository.find();
  }
}
