import { Request, Response } from 'express';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { SuperheroService } from './superhero.service';
export declare class SuperheroController {
    private readonly superheroService;
    constructor(superheroService: SuperheroService);
    create(createSuperheroDto: CreateSuperheroDto): Promise<import("./superhero.entity").Superhero>;
    findAll(): Promise<import("./superhero.entity").Superhero[]>;
    handleOptions(req: Request, res: Response): Response<any, Record<string, any>>;
}
