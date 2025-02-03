import { Controller, Get, Post, Body, Options, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { SuperheroService } from './superhero.service';

@Controller('superheroes')
export class SuperheroController {
    constructor(private readonly superheroService: SuperheroService) { }

    @Post()
    create(@Body() createSuperheroDto: CreateSuperheroDto) {
        return this.superheroService.create(createSuperheroDto);
    }

    @Get()
    findAll() {
        return this.superheroService.findAll();
    }

    // Explicit OPTIONS handler for /superheroes if needed
    @Options()
    handleOptions(@Req() req: Request, @Res() res: Response) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        return res.status(204).send();
    }
}
