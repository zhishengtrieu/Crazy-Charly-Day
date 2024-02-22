import { Entity, PrimaryColumn } from 'typeorm';


@Entity()
export class Caracteristique {
    @PrimaryColumn()
    idLabel: number;

    @PrimaryColumn()
    idAtelier: number;
}
