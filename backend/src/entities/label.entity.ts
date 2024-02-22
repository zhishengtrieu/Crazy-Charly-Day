import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Label {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
