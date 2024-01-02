import { Test, TestingModule } from '@nestjs/testing';
import { StaffTypeService } from './staff-type.service';

describe('StaffTypeService', () => {
  let service: StaffTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffTypeService],
    }).compile();

    service = module.get<StaffTypeService>(StaffTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
