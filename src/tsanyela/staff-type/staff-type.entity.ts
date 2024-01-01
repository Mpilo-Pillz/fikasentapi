import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Staff } from '../staff/staff.entity';

@Entity('staff_types')
export class StaffType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  type: string;

  @OneToMany(() => Staff, (staff) => staff.staffType)
  staff: Staff[];
}
