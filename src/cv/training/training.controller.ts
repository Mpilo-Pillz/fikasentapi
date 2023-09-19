import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrainingDto } from './training.dto';
import { TrainingService } from './training.service';

@Controller('training')
export class TrainingController {
  constructor(private trainingService: TrainingService) {}

  @Post('/new')
  create(@Body() body: TrainingDto) {
    this.trainingService.create(body);
  }

  @Get('/')
  getAllTraining() {
    return this.trainingService.findAll();
  }
}
