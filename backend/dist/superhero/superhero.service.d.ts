import { Repository } from 'typeorm';
import { Superhero } from './superhero.entity';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
export declare class SuperheroService {
    private superheroRepository;
    constructor(superheroRepository: Repository<Superhero>);
    create(createSuperheroDto: CreateSuperheroDto): Promise<Superhero>;
    findAll(): Promise<Superhero[]>;
}
