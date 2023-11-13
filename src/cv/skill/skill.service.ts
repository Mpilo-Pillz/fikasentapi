import { Injectable } from '@nestjs/common';
import { Skill } from './skill.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillDto } from './skill.dto';

@Injectable()
export class SkillService {
  constructor(@InjectRepository(Skill) private repository: Repository<Skill>) {}

  create(skillRequest: SkillDto) {
    const skill = this.repository.create(skillRequest);
    return this.repository.save(skill);
  }

  findAll(): Promise<Skill[]> {
    return this.repository.find();
  }
}
