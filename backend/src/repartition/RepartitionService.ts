import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atelier } from 'src/entities/atelier.entity';
import { Candidat } from 'src/entities/candidat.entity';

@Injectable()
export class RepartitionService {
  constructor(
    @InjectRepository(Atelier)
    private atelierRepository: Repository<Atelier>,
    @InjectRepository(Candidat)
    private candidatRepository: Repository<Candidat>
  ) {}

  async repartirCandidats(): Promise<void> {
    const ateliers = await this.atelierRepository.find();
    const candidats = await this.candidatRepository.find();

    // Logique de répartition
    candidats.forEach(async (candidat) => {
      let bestMatch = null;
      let highestCompatibilityScore = 0;

      ateliers.forEach((atelier) => {
        if (this.isWorkshopSafeForCandidate(atelier, candidat)) {
          const compatibilityScore = this.calculateCompatibilityScore(atelier, candidat);
  
          if (compatibilityScore > highestCompatibilityScore) {
            highestCompatibilityScore = compatibilityScore;
            bestMatch = atelier;
          }
        }
      });

      if (bestMatch) {
        candidat.atelier = bestMatch;
        await this.candidatRepository.save(candidat);
      }
    });
  }

  /**
   * Le score de compatibilité est le nombre de préférences communes entre l'atelier et le candidat.
   * @param workshop 
   * @param candidate 
   * @returns 
   */
  calculateCompatibilityScore(workshop, candidate): number {
    return workshop.labels.filter(label => candidate.preferences.includes(label)).length;
  }
  
  /**
   * On vérifie que l'atelier ne contient pas de labels auxquels le candidat est allergique.
   * @param workshop 
   * @param candidate 
   * @returns 
   */
  isWorkshopSafeForCandidate(workshop, candidate): boolean {
    return !workshop.labels.some(label => candidate.allergies.includes(label));
  }
}
