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

  @Column()
  capacite: number;

  @Column()
  image: string;
}
