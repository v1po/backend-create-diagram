import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { Survey } from 'src/survey/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Survey])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
