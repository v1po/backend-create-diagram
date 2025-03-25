import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './survey.entity';
import { User } from '../user/user.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async saveSurvey(data: any): Promise<Survey> {
    const { userId, studentClass, year, category, recommendations, studentData, parentData, teacherData, chartId } = data;
  
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    const parsedStudentData = studentData ? JSON.parse(studentData) : null;
    const parsedParentData = parentData ? JSON.parse(parentData) : null;
    const parsedTeacherData = teacherData ? JSON.parse(teacherData) : null;

    const survey = this.surveyRepository.create({
      userId,
      studentClass,
      year,
      category,
      recommendations,
      studentAnswers: parsedStudentData,
      parentAnswers: parsedParentData,
      teacherAnswers: parsedTeacherData,
      chartId,
    });

    await this.surveyRepository.save(survey);
    return survey;
  }

  async findAll(): Promise<Survey[]> {
    return this.surveyRepository.find({ relations: ['user'] });
  }

  async findOneByChartId(chartId: number): Promise<Survey> {
    const survey = await this.surveyRepository.findOne({ where: { chartId }, relations: ['user'] });
    if (!survey) {
      throw new NotFoundException('Опрос не найден');
    }
    return survey;
  }

  async generateReport(chartId: number): Promise<any> {
    const survey = await this.findOneByChartId(chartId);
    if (!survey) {
      throw new NotFoundException('Опрос не найден');
    }

    const report = {
      user: {
        firstName: survey.userId.firstName,
        lastName: survey.userId.lastName,
      },
      survey: {
        chartId:survey.chartId,
        category: survey.category,
        recommendations: survey.recommendations,
        studentAnswers: survey.studentAnswers,
        parentAnswers: survey.parentAnswers,
        teacherAnswers: survey.teacherAnswers,
        studentClass: survey.studentClass,
        year: survey.year,
      },
    };
    return report;
  }
}
