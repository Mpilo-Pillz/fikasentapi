import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class SkillDto {
  @Expose()
  id: number;
  @IsString()
  name: string;
  @IsString()
  icon: string;
  @IsString()
  proficiancy: string;
}
