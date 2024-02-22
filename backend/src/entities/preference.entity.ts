import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Preference {
    @PrimaryGeneratedColumn()
    idLabel: number;

    @PrimaryGeneratedColumn()
    idCandidat: number;
}
