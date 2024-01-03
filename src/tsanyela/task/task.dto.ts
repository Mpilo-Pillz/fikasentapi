import {
  IsInt,
  IsOptional,
  IsString,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  description: string;

  @IsDate()
  date: Date;

  @IsBoolean()
  isCompleted: boolean;

  @IsInt()
  staffId: number;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  date?: Date;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @IsOptional()
  @IsInt()
  staffId?: number;
}
