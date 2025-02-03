import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperheroModule } from './superhero/superhero.module';
// Optionally include the fallback controller if you want to try it
// import { OptionsController } from './options.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT || '5432', 10),
            username: process.env.DB_USERNAME || 'postgres',
            password: process.env.DB_PASSWORD || 'postgres',
            database: process.env.DB_DATABASE || 'superheroes',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
        }),
        SuperheroModule,
    ],
    controllers: [
        // OptionsController  // Uncomment if you want to use the fallback controller
    ],
})
export class AppModule { }
