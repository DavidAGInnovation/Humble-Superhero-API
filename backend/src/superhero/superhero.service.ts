import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
        try {
            const superhero = this.superheroRepository.create(createSuperheroDto);
            return await this.superheroRepository.save(superhero);
        } catch (error) {
            throw new HttpException(
                'Could not create superhero. Please verify your input.',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async findAll(): Promise<Superhero[]> {
        return this.superheroRepository.find({ order: { humilityScore: 'DESC' } });
    }
}
