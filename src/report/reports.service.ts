import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.enity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}

  async getReportData(id: number): Promise<Report> {
    return await this.reportRepository.findOne({ where: { id } });
  }

  async getAllReports(): Promise<Report[]> {
    return await this.reportRepository.find();
  }
}
