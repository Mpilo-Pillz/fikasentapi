import { Test, TestingModule } from '@nestjs/testing';
import { TsanyelaController } from './tsanyela.controller';

describe('TsanyelaController', () => {
  let controller: TsanyelaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TsanyelaController],
    }).compile();

    controller = module.get<TsanyelaController>(TsanyelaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
