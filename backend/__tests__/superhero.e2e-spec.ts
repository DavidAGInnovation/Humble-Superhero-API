import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { SuperheroService } from '../src/superhero/superhero.service';
import { DataSource } from 'typeorm';
import { Superhero } from '../src/superhero/superhero.entity';


describe('Superhero API (e2e)', () => {
    let app: INestApplication;
    let dataSource: DataSource;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true,
                transform: true,
            }),
        );
        await app.init();
        dataSource = app.get(DataSource);
    });

    beforeEach(async () => {
        // Clear all superheroes to ensure a clean state.
        await dataSource.getRepository(Superhero).clear();
    });

    it('POST /superheroes - success', async () => {
        const newHero = {
            name: 'Captain Kindness',
            superpower: 'Empathy',
            humilityScore: 9,
        };

        const response = await request(app.getHttpServer())
            .post('/superheroes')
            .send(newHero)
            .expect(201);

        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toEqual(newHero.name);
        expect(response.body.humilityScore).toEqual(newHero.humilityScore);
    });

    it('GET /superheroes - returns superheroes sorted by humilityScore descending', async () => {
        // Insert exactly three heroes
        await request(app.getHttpServer()).post('/superheroes').send({
            name: 'Hero A',
            superpower: 'Flying',
            humilityScore: 5,
        });
        await request(app.getHttpServer()).post('/superheroes').send({
            name: 'Hero B',
            superpower: 'Invisibility',
            humilityScore: 8,
        });
        await request(app.getHttpServer()).post('/superheroes').send({
            name: 'Hero C',
            superpower: 'Strength',
            humilityScore: 7,
        });

        const response = await request(app.getHttpServer())
            .get('/superheroes')
            .expect(200);

        const superheroes = response.body;
        expect(superheroes).toHaveLength(3);
        // Check that the highest humility score is first.
        expect(superheroes[0].humilityScore).toBe(8);
        expect(superheroes[1].humilityScore).toBe(7);
        expect(superheroes[2].humilityScore).toBe(5);
    });

    afterAll(async () => {
        await app.close();
    });
});