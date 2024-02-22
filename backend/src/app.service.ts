import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidat } from './entities/candidat.entity';
import { Atelier } from './entities/atelier.entity';
import {Label} from "./entities/label.entity";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Candidat)
    private candidatRepository: Repository<Candidat>,
    @InjectRepository(Atelier)
    private atelierRepository: Repository<Atelier>,
    @InjectRepository(Label)
    private labelRepository: Repository<Label>,
  ) {}

  candidater() {
    throw new Error('Method not implemented.');
  }

  async listeCandidats(): Promise<Candidat[]> {
    return this.candidatRepository.find();
  }

  repartirCandidats() {
    throw new Error('Method not implemented.');
  }

  annulerRepartition(){
    throw new Error('Method not implemented.');
  }

  async supprimerCandidat(id: number) {
    await this.candidatRepository.delete(id);
  }

  getAteliers() {
    return this.atelierRepository.find();
  }

  ajouterAtelier(atelier: Atelier) {
    return this.atelierRepository.save(atelier);
  }

  async modifierAtelier(id: number, atelierData: Partial<Atelier>) {
    await this.atelierRepository.update(id, atelierData);
    return true; // this.atelierRepository.findOne(id)
  }

  async supprimerAtelier(id: number) {
    await this.atelierRepository.delete(id);
  }

  listeLabels() {
    return this.labelRepository.find();
  }

  ajouterLabel() {
    throw new Error('Method not implemented.');
  }

  modifierLabel() {
    throw new Error('Method not implemented.');
  }

  supprimerLabel() {
    throw new Error('Method not implemented.');
  }
}
