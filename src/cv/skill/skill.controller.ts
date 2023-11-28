import { Body, Controller, Get, Post } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillDto } from './skill.dto';

@Controller('skill')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @Post('/new')
  create(@Body() body: SkillDto) {
    this.skillService.create(body);
  }

  @Get('/')
  getAllSkills() {
    return this.skillService.findAll();
  }
}
