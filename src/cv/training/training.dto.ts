import { Expose } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class TrainingDto {
  @Expose()
  id: number;
  @IsString()
  title: string;
  @IsString()
  author: string;
  @IsNumber()
  duration: number;
  @IsString()
  institution: string;
  @IsString()
  imgUrl: string;
  @IsDate()
  dateCompleted: string;
  @IsString()
  trainingUrl: string;
  @IsString()
  trainingType: string;
  @IsString()
  authorURL: string;
}
