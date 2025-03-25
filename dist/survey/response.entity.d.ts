import { Survey } from './survey.entity';
export declare class Response {
    id: number;
    respondentType: 'student' | 'parent' | 'teacher';
    answers: any;
    survey: Survey;
}
