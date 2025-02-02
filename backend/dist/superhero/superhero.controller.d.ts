import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
export declare class SuperheroController {
    private readonly superheroService;
    constructor(superheroService: SuperheroService);
    create(createSuperheroDto: CreateSuperheroDto): Promise<import("./superhero.entity").Superhero>;
    findAll(): Promise<import("./superhero.entity").Superhero[]>;
}
