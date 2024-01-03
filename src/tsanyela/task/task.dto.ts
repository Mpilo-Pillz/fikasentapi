import {
  IsInt,
  IsOptional,
  IsString,
  IsDate,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  description: string;

  @IsDate()
  date: Date;

  @IsBoolean()
  isCompleted: boolean;

  @IsNotEmpty()
  @IsInt()
  staffId: any;
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

  @IsNotEmpty()
  @IsInt()
  staffId: number;
}
