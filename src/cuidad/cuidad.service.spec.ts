import { Test, TestingModule } from '@nestjs/testing';
import { CuidadService } from './cuidad.service';

describe('CuidadService', () => {
  let service: CuidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuidadService],
    }).compile();

    service = module.get<CuidadService>(CuidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
