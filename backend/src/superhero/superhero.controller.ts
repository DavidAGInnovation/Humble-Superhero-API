import { Controller, Post, Get, Body } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroController {
    constructor(private readonly superheroService: SuperheroService) { }

    @Post()
    async create(@Body() createSuperheroDto: CreateSuperheroDto) {
        return this.superheroService.create(createSuperheroDto);
    }

    @Get()
    async findAll() {
        return this.superheroService.findAll();
    }
}
