import { Injectable, NotFoundException } from '@nestjs/common';
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

  async update(id: string, trainingDto: Partial<TrainingDto>) {
    const training = await this.repository.findOne({
      where: { id: parseInt(id) },
    });

    if (!training) {
      throw new NotFoundException('training not found');
    }

    trainingDto.author !== undefined && (training.author = trainingDto.author);
    trainingDto.authorURL !== undefined &&
      (training.authorURL = trainingDto.authorURL);
    trainingDto.dateCompleted !== undefined &&
      (training.dateCompleted = trainingDto.dateCompleted);
    trainingDto.duration !== undefined &&
      (training.duration = trainingDto.duration);
    trainingDto.imgUrl !== undefined && (training.imgUrl = trainingDto.imgUrl);
    trainingDto.institution !== undefined &&
      (training.institution = trainingDto.institution);
    trainingDto.title !== undefined && (training.title = trainingDto.title);
    trainingDto.trainingType &&
      (training.trainingType = trainingDto.trainingType);
    trainingDto.trainingUrl && (training.trainingUrl = trainingDto.trainingUrl);

    return await this.repository.save(training);
  }
}
