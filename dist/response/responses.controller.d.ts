import { ResponsesService, Responses } from './responses.service';
export declare class ResponsesController {
    private readonly responsesService;
    constructor(responsesService: ResponsesService);
    getUserResponses(id: number): Responses;
}
