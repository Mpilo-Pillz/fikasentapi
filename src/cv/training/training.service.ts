import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Training } from './training.entity';
import { Repository } from 'typeorm';
import { TrainingDto } from './training.dto';

@Injectable()
export class TrainingService {
  constructor(
    @InjectRepository(Training) private repository: Repository<Training>,
  ) {}

  create(trainingRequest: TrainingDto) {
    const training = this.repository.create(trainingRequest);
    return this.repository.save(training);
  }

  findAll(): Promise<Training[]> {
    return this.repository.find();
  }
}
