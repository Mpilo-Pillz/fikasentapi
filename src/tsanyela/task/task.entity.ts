import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Staff } from '../staff/staff.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  status: string;

  @ManyToOne(() => Staff, (staff) => staff.tasks)
  staff?: Staff;

  @Column()
  staffId: number;
}
