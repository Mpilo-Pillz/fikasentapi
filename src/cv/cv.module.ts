import { Module } from '@nestjs/common';
import { TrainingModule } from './training/training.module';
import { ProjectService } from './project/project.service';
import { ProjectController } from './project/project.controller';

@Module({
  imports: [TrainingModule],
  providers: [ProjectService],
  controllers: [ProjectController]
})
export class CvModule {}
