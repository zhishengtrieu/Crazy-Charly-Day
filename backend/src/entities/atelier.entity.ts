import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Candidat } from './candidat.entity';
import { Label } from './label.entity';

@Entity()
export class Atelier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column('text')
  description: string;

  @Column("simple-array")
  labels: Label[];

  @Column()
  capacite: number;

  @Column()
  image: string;

  @OneToMany(() => Candidat, candidat => candidat.atelier)
  participants: Candidat[];
}
