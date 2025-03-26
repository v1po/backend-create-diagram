import { Injectable } from '@nestjs/common';

export interface Responses {
  year: number;
  labels: string[];
  studentData: number[];
  parentData: number[];
  teacherData: number[];
}

const responses: { [key: number]: Responses } = {
};

@Injectable()
export class ResponsesService {
  findResponsesByUserId(id: number): Responses | undefined {
    return responses[id];
  }
}
