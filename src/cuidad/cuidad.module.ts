import { Module } from '@nestjs/common';
import { CuidadController } from './cuidad.controller';
import { CuidadService } from './cuidad.service';

@Module({
  controllers: [CuidadController],
  providers: [CuidadService]
})
export class CuidadModule {}
