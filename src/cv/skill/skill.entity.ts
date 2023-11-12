import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Skill {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  icon: string;
  @Column()
  proficiancy: string;
}
