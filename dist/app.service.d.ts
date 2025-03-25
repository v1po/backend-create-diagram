import { Repository } from 'typeorm';
import { Survey } from './survey/survey.entity';
export declare class SurveyService {
    private surveyRepository;
    constructor(surveyRepository: Repository<Survey>);
    create(survey: Survey): Promise<Survey>;
    findAll(): Promise<Survey[]>;
}
