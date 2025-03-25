import { Injectable } from '@nestjs/common';

export interface Responses {
  year: number;
  labels: string[];
  studentData: number[];
  parentData: number[];
  teacherData: number[];
}

const responses: { [key: number]: Responses } = {
  1: {
    year: 2023,
    labels: ['Label 1', 'Label 2', 'Label 3'], // Замените на реальные метки
    studentData: [85, 90, 78],
    parentData: [88, 85, 92],
    teacherData: [75, 80, 85],
  },
  // Добавьте остальные записи ответов здесь
};

@Injectable()
export class ResponsesService {
  findResponsesByUserId(id: number): Responses | undefined {
    return responses[id];
  }
}
