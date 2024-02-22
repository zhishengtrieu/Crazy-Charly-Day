import { Entity, PrimaryColumn, ManyToOne, JoinColumn  } from 'typeorm';
import { Label } from './label.entity';
import { Candidat } from './candidat.entity';

@Entity()
export class Preference {
    @PrimaryColumn()
    idLabel: number;

    @PrimaryColumn()
    idCandidat: number;

    @ManyToOne(() => Label)
    @JoinColumn({ name: 'idLabel' })
    label: Label;
  
    @ManyToOne(() => Candidat)
    @JoinColumn({ name: 'idCandidat' })
    candidat: Candidat;
}
