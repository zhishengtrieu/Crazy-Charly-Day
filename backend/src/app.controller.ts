import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Pour l'user
  @Get('/candidater')
  candidaterAtelier() {
    return this.appService.candidater();
  }

  //Pour l'admin
  @Get('/ateliers')
  getAteliers() {
    return this.appService.getAteliers();
  }

  @Get('/candidats')
  listeCandidats() {
    return this.appService.listeCandidats();
  }

  /*
  @Get('/labels')
  listeLabels()  {
    return this.appService.listeLabels();
  }

  @Get('/ajouterLabel')
  ajouterLabel() {
    return this.appService.ajouterLabel();
  }

  @Get('/modifierLabel')
  modifierLabel() {
    return this.appService.modifierLabel();
  }

  @Get('/supprimerLabel')
  supprimerLabel() {
    return this.appService.supprimerLabel();
  }*/

  @Get('/ajouterAtelier')
  ajouterAtelier() {
    return this.appService.ajouterAtelier();
  }

  @Get('/modifierAtelier')
  modifierAtelier() {
    return this.appService.modifierAtelier();
  }

  @Get('/supprimerAtelier')
  supprimerAtelier() {
    return this.appService.supprimerAtelier();
  }

  /**
   * Permet de repartir les candidats en attente dans les ateliers 
   * @returns 
   */
  @Get('/repartirCandidats')
  repartirCandidats() {
    return this.appService.repartirCandidats();
  }

  /**
   * Permet d'anuler la repartition d'un candidat dans un atelier
   * le ramenne dans la liste des candidats en attente
   * @returns 
   */
  @Get('/anulerRepartition')
  anulerRepartition() {
    return this.appService.anulerRepartition();
  }

  /**
   * Supprime un candidat de la liste des candidats en attente
   * @returns 
   */
  @Get('/supprimerCandidat')
  supprimerCandidat() {
    return this.appService.supprimerCandidat();
  }

}
