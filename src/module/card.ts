import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { Card } from 'src/entity/card';
import { CardService } from 'src/service/card';
import { CardController } from 'src/controller/card';
import { AuthModule } from './auth';

@Module({
  imports: [
    TypeOrmModule.forFeature([Card]),
    AuthModule,
    MulterModule.register({
      dest: './upload'
    })],
  providers: [CardService],
  controllers: [CardController],
  exports: [CardService],
})
export class CardModule { }