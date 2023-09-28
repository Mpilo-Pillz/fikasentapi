import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDto } from './project.dto';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post('/new')
  create(@Body() body: ProjectDto) {
    this.projectService.create(body);
  }

  @Get('/')
  getAllTraining() {
    return this.projectService.findAll();
  }
}
