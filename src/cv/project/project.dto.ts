import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class ProjectDto {
  @Expose()
  id: number;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  tools: number;
  @IsString()
  projectUrl: string;
  @IsString()
  imgUrl: string;
  @IsString()
  teamSize: string;
}
