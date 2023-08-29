import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import {CiudadDto } from './dto/ciudad.dto';

@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Post()
  create(@Body() CiudadDto: CiudadDto) {
    return this.ciudadService.create(CiudadDto);
  }

  @Get()
  findAll() {
    return this.ciudadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ciudadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CiudadDto: CiudadDto) {
    return this.ciudadService.update(+id, CiudadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ciudadService.remove(+id);
  }
}
