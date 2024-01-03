import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateStaffDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsInt()
  @IsOptional()
  staffTypeId: number;

  @IsString()
  role: string;

  @IsString()
  contactNumber: string;
}

export class UpdateStaffDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsInt()
  staffTypeId?: number;

  @IsOptional()
  @IsString()
  role?: string;
  @IsOptional()
  @IsString()
  contactNumber?: string;
}
