import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Staff } from '../staff/staff.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ name: 'activation_code' })
  activationCode: string;

  @Column({ name: 'activation_code_expiry', type: 'timestamptz' })
  activationCodeExpiry: Date;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @CreateDateColumn({ name: 'inserted_date', type: 'timestamptz' })
  insertedDate: Date;

  @UpdateDateColumn({ name: 'last_updated', type: 'timestamptz' })
  lastUpdated: Date;

  @OneToMany(() => Staff, (staff) => staff.user)
  staff: Staff[];
}
