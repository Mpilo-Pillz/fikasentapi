import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TrainingDto } from './training.dto';
import { TrainingService } from './training.service';

@Controller('training')
export class TrainingController {
  constructor(private trainingService: TrainingService) {}

  @Post('/new')
  create(@Body() body: TrainingDto) {
    this.trainingService.create(body);
  }

  @Patch('/update/:id')
  @HttpCode(HttpStatus.OK)
  updateTraining(@Param('id') id: string, @Body() trainingDto: TrainingDto) {
    return this.trainingService.update(id, trainingDto);
  }

  @Get('/')
  getAllTraining() {
    return this.trainingService.findAll();
  }
}
