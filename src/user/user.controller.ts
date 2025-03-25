import { Controller, Post, Body, Logger, Query, Get, NotFoundException} from '@nestjs/common';
import { UserService } from './user.service';
import { report } from 'process';

@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post('register')
  async registerUser(@Body() createUserDto: { firstName: string, lastName: string }) {
    this.logger.log('Register user request received');  // Логирование для проверки
    try {
      const { firstName, lastName } = createUserDto;

      // Проверка наличия значений
      if (!firstName || !lastName) {
        throw new Error('First name and last name must be provided');
      }

      const user = await this.userService.findOrCreate(firstName, lastName);
      return { userId: user.id };
    } catch (error) {
      this.logger.error('Error in registerUser:', error);  // Логирование ошибок
      throw error;
    }
  }

  @Get('report')
  async getUserId(@Query('firstName') firstName: string, @Query('lastName') lastName: string) {
    const report = await this.userService.findReport(firstName, lastName);
    if (!report) {
      throw new NotFoundException('Пользователь не найден');
    }
    return {report};
  }

}
