// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperheroModule } from './superhero/superhero.module';

@Module({
    imports: [
        // Configure TypeORM using environment variables (overrides ormconfig.json when provided)
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT || '5432', 10),
            username: process.env.DB_USERNAME || 'postgres',
            password: process.env.DB_PASSWORD || 'postgres',
            database: process.env.DB_DATABASE || 'superheroes',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true, // Only use in development. For production, use migrations.
        }),
        SuperheroModule,
    ],
})
export class AppModule { }
