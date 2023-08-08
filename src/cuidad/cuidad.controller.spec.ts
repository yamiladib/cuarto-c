import { Test, TestingModule } from '@nestjs/testing';
import { CuidadController } from './cuidad.controller';

describe('CuidadController', () => {
  let controller: CuidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuidadController],
    }).compile();

    controller = module.get<CuidadController>(CuidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
