import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atelier } from 'src/entities/atelier.entity';

@Injectable()
export class AtelierService {

    constructor(@InjectRepository(Atelier) private ateliersRepository: Repository<Atelier>) { }

    async getAteliers(atelier: Atelier): Promise<Atelier[]> {
        return await this.ateliersRepository.find();
    }

    async getAtelier(_id: number): Promise<Atelier[]> {
        return await this.ateliersRepository.find({
            select: ["id", "nom", "description", "labels", "capacite", "image", "participants"],
            where: [{ "id": _id }]
        });
    }

    async updateAtelier(atelier: Atelier) {
        this.ateliersRepository.save(atelier)
    }

    async deleteAtelier(atelier: Atelier) {
        this.ateliersRepository.delete(atelier);
    }
}