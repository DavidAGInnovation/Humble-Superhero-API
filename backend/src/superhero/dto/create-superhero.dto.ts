import { IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';

export class CreateSuperheroDto {
    @IsNotEmpty({ message: 'Name is required' })
    @IsString({ message: 'Name must be a string' })
    name!: string;

    @IsNotEmpty({ message: 'Superpower is required' })
    @IsString({ message: 'Superpower must be a string' })
    superpower!: string;

    @IsNotEmpty({ message: 'Humility score is required' })
    @IsInt({ message: 'Humility score must be an integer' })
    @Min(1, { message: 'Humility score must be at least 1' })
    @Max(10, { message: 'Humility score must not exceed 10' })
    humilityScore!: number;
}
