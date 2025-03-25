import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Survey } from 'src/survey/survey.entity';


@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
  ) {}

  async findOrCreate(firstName: string, lastName: string): Promise<User> {
    this.logger.log(`Finding or creating user: ${firstName} ${lastName}`);  // Логирование
    let user;
    try {
      if (!firstName || !lastName) {
        throw new Error('First name and last name must be provided');
      }

      // Очистка данных перед запросом
      const cleanedFirstName = firstName.trim();
      const cleanedLastName = lastName.trim();

      this.logger.log(`Cleaned firstName: ${cleanedFirstName}, Cleaned lastName: ${cleanedLastName}`);  // Логирование очищенных данных

      user = await this.userRepository.findOne({ where: { firstName: cleanedFirstName, lastName: cleanedLastName } });
      if (!user) {
        this.logger.log('User not found, creating new user');  // Логирование
        user = this.userRepository.create({ firstName: cleanedFirstName, lastName: cleanedLastName });
        await this.userRepository.save(user);
      }
      this.logger.log('User found or created:', user);  // Логирование
    } catch (error) {
      this.logger.error('Error in findOrCreate:', error);  // Логирование ошибок
      throw error;
    }
    return user;
  }
  async findReport(firstName: string, lastName: string){
    const cleanedFirstName = firstName;
      const cleanedLastName = lastName;
      const user = await this.userRepository.findOne({ where: { firstName: cleanedFirstName, lastName: cleanedLastName },relations: ['surveys'] });
      return user;
  }
}