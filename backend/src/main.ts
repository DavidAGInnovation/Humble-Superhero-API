import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    // Set up CORS directly during creation.
    const app = await NestFactory.create(AppModule, {
        cors: {
            origin: 'http://localhost:8080',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
            allowedHeaders: 'Content-Type, Accept',
            optionsSuccessStatus: 204,
        },
    });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    await app.listen(3000);
    console.log('Backend API is listening on http://localhost:3000');
}
bootstrap();
