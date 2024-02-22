import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Allergie {
    @PrimaryColumn()
    idLabel: number;

    @PrimaryColumn()
    idCandidat: number;
}
