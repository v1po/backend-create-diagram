import { Repository } from 'typeorm';
import { Report } from './report.enity';
export declare class ReportsService {
    private reportRepository;
    constructor(reportRepository: Repository<Report>);
    getReportData(id: number): Promise<Report>;
    getAllReports(): Promise<Report[]>;
}
