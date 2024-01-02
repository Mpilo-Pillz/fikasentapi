import { Module } from '@nestjs/common';
import { StaffTypeService } from './staff-type.service';

@Module({
  providers: [StaffTypeService]
})
export class StaffTypeModule {}
