import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Allergie {
    @PrimaryGeneratedColumn()
    idLabel: number;

    @PrimaryGeneratedColumn()
    idCandidat: number;
}
