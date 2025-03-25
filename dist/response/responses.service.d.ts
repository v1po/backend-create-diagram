export interface Responses {
    year: number;
    labels: string[];
    studentData: number[];
    parentData: number[];
    teacherData: number[];
}
export declare class ResponsesService {
    findResponsesByUserId(id: number): Responses | undefined;
}
