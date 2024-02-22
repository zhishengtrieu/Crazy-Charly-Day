import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { AtelierService } from 'src/services/atelier.service';
import { Atelier } from 'src/entities/atelier.entity';

@Controller('ateliers')
export class AteliersController {

    constructor(private service: AtelierService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getAtelier(params.id);
    }

    @Post()
    create(@Body() atelier: Atelier) {
        return this.service.createAtelier(atelier);
    }

    @Put()
    update(@Body() Atelier: Atelier) {
        return this.service.updateAtelier(Atelier);
    }

    @Delete(':id')
    deleteAtelier(@Param() params) {
        return this.service.deleteAtelier(params.id);
    }
}