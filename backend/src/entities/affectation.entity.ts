import { Entity, PrimaryColumn } from 'typeorm';
import { Candidat } from './candidat.entity';
import { Label } from './label.entity';

@Entity()
export class Affectation {
    @PrimaryColumn()
    idAtelier: number;

    @PrimaryColumn()
    idCandidat: number;
}
