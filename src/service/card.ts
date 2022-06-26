import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from 'src/entity/card';
import { ICardCreateParams } from 'src/interafaces/card';

@Injectable()
export class CardService {
    constructor(@InjectRepository(Card) private cardRepository: Repository<Card>) { }

    async findAll(): Promise<Card[]> {
        return await this.cardRepository.find();
    }

    async create(c: ICardCreateParams): Promise<Card> {
        return await this.cardRepository.save(c);
    }


}