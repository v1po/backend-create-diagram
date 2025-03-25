import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post('save')
  async saveSurvey(@Body() surveyData: any) {
    const survey = await this.surveyService.saveSurvey(surveyData);
    return { message: 'Опрос успешно сохранен', surveyId: survey.id };
  }

  @Get()
  async findAll() {
    const surveys = await this.surveyService.findAll();
    return surveys;
  }

  @Get(':chartId')
  async findOneByChartId(@Param('chartId') chartId: number) {
    const survey = await this.surveyService.findOneByChartId(chartId);
    return survey;
  }

  @Get('report/:chartId')
  async generateReport(@Param('chartId') chartId: number) {
    const report = await this.surveyService.generateReport(chartId);
    return report;
  }
}
