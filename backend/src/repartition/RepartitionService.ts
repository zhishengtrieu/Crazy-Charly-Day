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
      let atelierAssigne = null;
      let maxMatchingLabels = 0;

      ateliers.forEach((atelier) => {
        const matchingLabels = atelier.labels.filter(label => candidat.preferences.includes(label)).length;
        if (matchingLabels > maxMatchingLabels) {
          maxMatchingLabels = matchingLabels;
          atelierAssigne = atelier;
        }
      });

      if (atelierAssigne) {
        candidat.atelier = atelierAssigne;
        await this.candidatRepository.save(candidat);
      }
    });
  }
}
