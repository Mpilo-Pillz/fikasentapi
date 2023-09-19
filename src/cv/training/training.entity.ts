import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type MediaType = 'Book' | 'Video';

@Entity()
export class Training {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  author: string;
  @Column()
  duration: number;
  @Column()
  institution: string;
  @Column()
  imgUrl: string;
  @Column()
  dateCompleted: string;
  @Column()
  trainingUrl: string;
  @Column()
  trainingType: string;
  @Column()
  authorURL: string;
}
