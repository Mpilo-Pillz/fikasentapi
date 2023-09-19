import { Test, TestingModule } from '@nestjs/testing';
import { ThirdpartyApisService } from './thirdparty-apis.service';

describe('ThirdpartyApisService', () => {
  let service: ThirdpartyApisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdpartyApisService],
    }).compile();

    service = module.get<ThirdpartyApisService>(ThirdpartyApisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
