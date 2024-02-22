import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Atelier } from './entities/atelier.entity';
import { Candidat } from './entities/candidat.entity';
import { Label } from './entities/label.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3307,
      username: 'crazy',
      password: 'crazy',
      database: 'db_crazy',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Atelier, Candidat, Label]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
