import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Survey } from './survey.entity';

@Entity()
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  respondentType: 'student' | 'parent' | 'teacher';

  @Column('json')
  answers: any;

  @ManyToOne(() => Survey, survey => survey.responses, { onDelete: 'CASCADE' })
  survey: Survey;
}
