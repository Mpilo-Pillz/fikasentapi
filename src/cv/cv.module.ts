import { Module } from '@nestjs/common';
import { TrainingModule } from './training/training.module';
import { ProjectService } from './project/project.service';
import { ProjectController } from './project/project.controller';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [TrainingModule, ProjectModule],
})
export class CvModule {}
