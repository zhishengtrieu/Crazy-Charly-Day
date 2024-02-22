import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Atelier } from 'src/entities/atelier.entity';
import { Candidat } from 'src/entities/candidat.entity';
import { Affectation } from 'src/entities/affectation.entity';
import { Label } from 'src/entities/label.entity';
import { Preference } from 'src/entities/preference.entity';
import { Allergie } from 'src/entities/allergie.entity';
import { Caracteristique } from 'src/entities/carateristique.entity';

@Injectable()
export class RepartitionService {
  constructor(
    @InjectRepository(Atelier)
    private atelierRepository: Repository<Atelier>,
    @InjectRepository(Candidat)
    private candidatRepository: Repository<Candidat>,
    @InjectRepository(Affectation)
    private affectationRepository: Repository<Affectation>,
    @InjectRepository(Caracteristique)
    private workshopLabelRepository: Repository<Caracteristique>,
    @InjectRepository(Preference)
    private preferenceRepository: Repository<Preference>,
    @InjectRepository(Allergie)
    private allergieRepository: Repository<Allergie>,
  ) {}

  async repartirCandidats(): Promise<void> {
    const ateliers = await this.atelierRepository.find();
    const candidats = await this.candidatRepository.find();

    // Logique de répartition
    candidats.forEach(async (candidat) => {
      let bestMatch = null;
      let highestCompatibilityScore = 0;
    
      for(let i = 0; i < ateliers.length; i++){
        if (this.isWorkshopSafeForCandidate(ateliers[i], candidat)) {
          const compatibilityScore = await this.calculateCompatibilityScore(ateliers[i], candidat);
          
          if (compatibilityScore > highestCompatibilityScore) {
            highestCompatibilityScore = compatibilityScore;
            bestMatch = ateliers[i];
          }
        }
      }

      if (bestMatch) {
        // On affecte le candidat à l'atelier
        await this.affectationRepository.save({ idAtelier: bestMatch.id, idCandidat: candidat.id });
      }
    });
  }

  /**
   * Le score de compatibilité est le nombre de préférences communes entre l'atelier et le candidat.
   * @param workshop 
   * @param candidate 
   * @returns 
   */
  async calculateCompatibilityScore(workshop, candidate): Promise<number> {
    const workshopLabels = await this.workshopLabelRepository.find({ where: { idAtelier: workshop.id } });
    const candidatePreferences = await this.preferenceRepository.find({ where: { idCandidat: candidate.id } });
    return workshopLabels.filter(label => candidatePreferences.some(preference => preference.idLabel === label.idLabel)).length;
  }
  
  /**
   * On vérifie que l'atelier ne contient pas de labels auxquels le candidat est allergique.
   * @param workshop 
   * @param candidate 
   * @returns 
   */
  async isWorkshopSafeForCandidate(workshop, candidate): Promise<boolean> {
    const workshopLabels = await this.workshopLabelRepository.find({ where: { idAtelier: workshop.id } });
    const candidateAllergies = await this.allergieRepository.find({ where: { idCandidat: candidate.id } });
    return !workshopLabels.some(label => candidateAllergies.some(allergie => allergie.idLabel === label.idLabel));
  }
}
