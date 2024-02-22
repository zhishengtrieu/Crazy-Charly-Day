import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Caracteristique {
    @PrimaryGeneratedColumn()
    idLabel: number;

    @PrimaryGeneratedColumn()
    idAtelier: number;
}
