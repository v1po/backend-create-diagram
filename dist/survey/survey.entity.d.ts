import { User } from '../user/user.entity';
export declare class Survey {
    id: number;
    userId: User;
    studentClass: string;
    year: number;
    category: number;
    studentAnswers: any;
    parentAnswers: any;
    teacherAnswers: any;
    recommendations: string;
    chartId: number;
    createdAt: Date;
    responses: any;
}
