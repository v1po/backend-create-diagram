import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.surveys)
  userId: User;

  @Column()
  studentClass: string;

  @Column()
  year: number;

  @Column()
  category: number;

  @Column('json')
  studentAnswers: any;

  @Column('json')
  parentAnswers: any;

  @Column('json')
  teacherAnswers: any;

  @Column()
  recommendations: string;

  @Column()
  chartId: number;

  @CreateDateColumn()
  createdAt: Date;
  responses: any;
}
