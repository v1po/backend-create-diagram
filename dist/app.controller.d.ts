import { SurveyService } from './survey/survey.service';
import { Survey } from './survey/survey.entity';
import { Response as ExpressResponse } from 'express';
export declare class SurveyController {
    private readonly surveyService;
    constructor(surveyService: SurveyService);
    findOneByChartId(chartId: number): Promise<Survey>;
    findAll(): Promise<Survey[]>;
    findOne(chartId: number): Promise<Survey>;
    getReport(id: number, res: ExpressResponse): Promise<void>;
}
