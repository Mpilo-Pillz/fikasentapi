import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { StaffType } from '../staff-type/staff-type.entity';
import { Task } from '../task/task.entity';

@Entity('staff')
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.staff)
  user: User;

  @Column()
  userId: string;

  @ManyToOne(() => StaffType, (staffType) => staffType.staff)
  staffType: StaffType;

  @Column()
  staffTypeId: number;

  @OneToMany(() => Task, (task) => task.staff)
  tasks: Task[];
}
