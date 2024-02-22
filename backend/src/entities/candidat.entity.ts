import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Atelier } from './atelier.entity';

@Entity()
export class Candidat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column("simple-array")
  preferences: string[];

  @ManyToOne(() => Atelier, atelier => atelier.participants)
  atelier: Atelier;
}
