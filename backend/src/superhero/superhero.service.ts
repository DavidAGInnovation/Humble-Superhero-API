import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Superhero } from './superhero.entity';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Injectable()
export class SuperheroService {
    constructor(
        @InjectRepository(Superhero)
        private superheroRepository: Repository<Superhero>,
    ) { }

    async create(createSuperheroDto: CreateSuperheroDto): Promise<Superhero> {
        const superhero = this.superheroRepository.create(createSuperheroDto);
        return await this.superheroRepository.save(superhero);
    }

    async findAll(): Promise<Superhero[]> {
        // Sort by humilityScore descending
        return await this.superheroRepository.find({ order: { humilityScore: 'DESC' } });
    }
}
