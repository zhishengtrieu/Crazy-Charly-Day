import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Candidat } from './candidat.entity';

@Entity()
export class Atelier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column('text')
  description: string;

  @Column("simple-array")
  labels: string[];

  @Column()
  capacite: number;

  @OneToMany(() => Candidat, candidat => candidat.atelier)
  participants: Candidat[];
}
