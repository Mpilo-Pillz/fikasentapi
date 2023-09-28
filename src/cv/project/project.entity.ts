import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type TeamSize = 'Solo' | 'In a Team';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  tools: number;
  @Column()
  projectUrl: string;
  @Column()
  imgUrl: string;
  @Column()
  teamSize: string;
}
