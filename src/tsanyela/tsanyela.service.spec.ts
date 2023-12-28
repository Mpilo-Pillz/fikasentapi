import { Test, TestingModule } from '@nestjs/testing';
import { TsanyelaService } from './tsanyela.service';

describe('TsanyelaService', () => {
  let service: TsanyelaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TsanyelaService],
    }).compile();

    service = module.get<TsanyelaService>(TsanyelaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
