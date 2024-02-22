import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Affectation {
    @PrimaryGeneratedColumn()
    idAtelier: number;

    @PrimaryGeneratedColumn()
    idCandidat: number;
}
