import { Repository } from 'typeorm';
import { Survey } from './survey.entity';
import { User } from '../user/user.entity';
export declare class SurveyService {
    private surveyRepository;
    private userRepository;
    constructor(surveyRepository: Repository<Survey>, userRepository: Repository<User>);
    saveSurvey(data: any): Promise<Survey>;
    findAll(): Promise<Survey[]>;
    findOneByChartId(chartId: number): Promise<Survey>;
    generateReport(chartId: number): Promise<any>;
}
