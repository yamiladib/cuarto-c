import { Injectable } from '@nestjs/common';
import { CiudadDto } from './dto/ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';

@Injectable()
export class CiudadService {
  public ciudades: Ciudad[] = [];

  constructor(@InjectRepository(Ciudad) public readonly ciudadRepository: Repository<Ciudad>) { }

  public async getAllRaw(): Promise<Ciudad[]> {
    let datos = await this.ciudadRepository.query("SELECT * FROM ciudades");
    datos.forEach(element => {
      let ciudad: Ciudad = new Ciudad(element['idCiudad'], element['nombre']);
      this.ciudades.push(ciudad);
    });
    return this.ciudades;
  }
  create(createCiudadDto: CiudadDto) {
    return 'This action adds a new ciudad';
  }

  findAll() {
    return `This action returns all ciudad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudad`;
  }

  update(id: number, updateCiudadDto: CiudadDto) {
    return `This action updates a #${id} ciudad`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudad`;
  }
}
