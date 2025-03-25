// responses.controller.ts
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ResponsesService, Responses } from './responses.service';

@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Get(':id')
  getUserResponses(@Param('id') id: number): Responses {
    const responses = this.responsesService.findResponsesByUserId(id);
    if (!responses) {
      throw new NotFoundException('Ответы пользователя не найдены');
    }
    return responses;
  }
}
