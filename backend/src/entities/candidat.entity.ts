import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Atelier } from './atelier.entity';
import { Label } from './label.entity';

@Entity()
export class Candidat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column("simple-array")
  preferences: Label[];

  @ManyToOne(() => Atelier, atelier => atelier.participants)
  atelier: Atelier;
}
