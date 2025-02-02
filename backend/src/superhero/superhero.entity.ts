import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Superhero {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    superpower!: string;

    @Column({ type: 'int' })
    humilityScore!: number;
}
