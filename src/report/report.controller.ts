import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Response } from 'express';
import * as xlsx from 'xlsx';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get(':id/download')
  async downloadReport(@Param('id') id: number, @Res() res: Response) {
    const report = await this.reportsService.getReportData(id);
    if (!report) {
      throw new NotFoundException('Отчет не найден');
    }

    // Создание нового workbook и worksheet
    const workbook = xlsx.utils.book_new();
    const worksheetData = [
      ['Дата', 'Ожидание семьи', 'Задачи', 'Рекомендации', 'Воплощение рекомендаций', 'Результаты'],
      [report.createdAt, 'Диаграмма с данными', '', report.recommendations, '', '']
    ];
    const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);

    // Добавление worksheet в workbook
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Report');

    // Генерация XLSX файла
    const buffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Установка заголовков и отправка файла на скачивание
    res.setHeader('Content-Disposition', `attachment; filename=report_${id}.xlsx`);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);
  }
}
