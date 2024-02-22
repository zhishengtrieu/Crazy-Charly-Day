import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  //Pour l'user
  candidaterAtelier() {
    throw new Error('Method not implemented.');
  }

  //Pour l'admin
  getAteliers() {
    throw new Error('Method not implemented.');
  }

  listeCandidats() {
    throw new Error('Method not implemented.');
  }
  
  candidater() {
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

  /*
  ajouterLabel() {
    throw new Error('Method not implemented.');
  }

  modifierLabel() {
    throw new Error('Method not implemented.');
  }

  supprimerLabel() {
    throw new Error('Method not implemented.');
  }*/

  repartirCandidats() {
    throw new Error('Method not implemented.');
  }

  anulerRepartition(){
    throw new Error('Method not implemented.');
  }

  supprimerCandidat() {
    throw new Error('Method not implemented.');
  }
}
