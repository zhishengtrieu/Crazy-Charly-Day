import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidat } from './entities/candidat.entity';
import { Atelier } from './entities/atelier.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Candidat)
    private candidatRepository: Repository<Candidat>,
    @InjectRepository(Atelier)
    private atelierRepository: Repository<Atelier>,
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

  supprimerCandidat() {
    throw new Error('Method not implemented.');
  }

  getAteliers() {
    return this.atelierRepository.find();
  }

  ajouterAtelier() {
    throw new Error('Method not implemented.');
  }

  modifierAtelier() {
    throw new Error('Method not implemented.');
  }

  supprimerAtelier() {
    throw new Error('Method not implemented.');
  }

  listeLabels() {
    throw new Error('Method not implemented.');
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
