import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidat } from './entities/candidat.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Candidat)
    private candidatRepository: Repository<Candidat>,
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
    throw new Error('Method not implemented.');
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
