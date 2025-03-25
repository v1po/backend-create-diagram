import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Survey } from 'src/survey/survey.entity';
export declare class UserService {
    private userRepository;
    private surveyRepository;
    private readonly logger;
    constructor(userRepository: Repository<User>, surveyRepository: Repository<Survey>);
    findOrCreate(firstName: string, lastName: string): Promise<User>;
    findReport(firstName: string, lastName: string): Promise<User>;
}
