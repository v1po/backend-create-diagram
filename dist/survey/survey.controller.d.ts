import { SurveyService } from './survey.service';
export declare class SurveyController {
    private readonly surveyService;
    constructor(surveyService: SurveyService);
    saveSurvey(surveyData: any): Promise<{
        message: string;
        surveyId: number;
    }>;
    findAll(): Promise<import("./survey.entity").Survey[]>;
    findOneByChartId(chartId: number): Promise<import("./survey.entity").Survey>;
    generateReport(chartId: number): Promise<any>;
}
