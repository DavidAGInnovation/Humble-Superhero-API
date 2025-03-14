import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { Superhero } from './superhero.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Superhero])],
    controllers: [SuperheroController],
    providers: [SuperheroService],
})
export class SuperheroModule { }
