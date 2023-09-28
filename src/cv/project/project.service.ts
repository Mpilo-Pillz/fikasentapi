import { Injectable } from '@nestjs/common';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectDto } from './project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private repository: Repository<Project>,
  ) {}

  create(projectRequest: ProjectDto) {
    const project = this.repository.create(projectRequest);
    return this.repository.save(project);
  }

  findAll(): Promise<Project[]> {
    return this.repository.find();
  }
}
