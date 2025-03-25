import { Controller, Get, Post, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { SurveyService } from './survey/survey.service';
import { Survey } from './survey/survey.entity';
import { Response as ExpressResponse } from 'express';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  async findOneByChartId(@Body('chartId') chartId: number): Promise<Survey> {
    return this.surveyService.findOneByChartId(chartId);  // Используем сервис для поиска
  }

  @Get()
  async findAll(): Promise<Survey[]> {
    return this.surveyService.findAll();
  }

  @Get(':chartId')
  async findOne(@Param('chartId') chartId: number): Promise<Survey> {
    return this.surveyService.findOneByChartId(chartId);
  }

  @Get('report/:id')
  async getReport(@Param('id') id: number, @Res() res: ExpressResponse) {
    const buffer = await this.surveyService.generateReport(id);
    res.status(HttpStatus.OK)
      .header('Content-Disposition', 'attachment; filename=report.xlsx')
      .header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
      .send(buffer);
  }
}
