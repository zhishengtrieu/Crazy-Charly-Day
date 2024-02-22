import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/candidat/create')
  candidaterAtelier() {
    return this.appService.candidater();
  }

  /**
   * Liste les candidats en attente
   */
  @Get('/candidat/read')
  listeCandidats() {
    return this.appService.listeCandidats();
  }
  
  /**
   * Supprime un candidat de la liste des candidats en attente
   * @returns 
   */
  @Get('/candidat/delete')
  supprimerCandidat() {
    return this.appService.supprimerCandidat();
  }

  /**
   * Permet de repartir les candidats en attente dans les ateliers 
   * @returns 
   */
  @Get('/candidat/repartition/repartir')
  repartirCandidats() {
    return this.appService.repartirCandidats();
  }

  /**
   * Permet d'annuler la repartition d'un candidat dans un atelier
   * le ramenne dans la liste des candidats en attente
   * @returns 
   */
  @Get('/candidat/repartition/annuler')
  annulerRepartition() {
    return this.appService.annulerRepartition();
  }

  @Post('/label/create')
  ajouterLabel() {
    return this.appService.ajouterLabel();
  }

  @Get('/label/read')
  listeLabels()  {
    return this.appService.listeLabels();
  }

  @Post('/label/update')
  modifierLabel() {
    return this.appService.modifierLabel();
  }

  @Get('/label/delete')
  supprimerLabel() {
    return this.appService.supprimerLabel();
  }

  @Post('/atelier/create')
  ajouterAtelier() {
    return this.appService.ajouterAtelier();
  }

  @Get('/atelier/read')
  getAteliers() {
    return this.appService.getAteliers();
  }

  @Post('/atelier/update')
  modifierAtelier() {
    return this.appService.modifierAtelier();
  }

  @Get('/atelier/delete')
  supprimerAtelier() {
    return this.appService.supprimerAtelier();
  }
}
