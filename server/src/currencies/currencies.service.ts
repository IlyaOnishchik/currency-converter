import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Currency } from './entites/currency.entity';

@Injectable()
export class CurrenciesService {
  constructor(
    @InjectRepository(Currency) private currenciesRepository: Repository<Currency>
  ) {}

  async create(code:string, symbol: string, name: string, imageName: string): Promise<Currency> {
    const currency = new Currency();
    currency.code = code;
    currency.symbol = symbol;
    currency.name = name;
    currency.imageName = imageName;
    return await this.currenciesRepository.save(currency);
  }

  async findAll(): Promise<Currency[]> {
    return await this.currenciesRepository.find();
  }

  async findManyByCodes (codes: string[]) {
    return await this.currenciesRepository.find({ where: { code: In(codes) } });
  }

  async findOneById(id: string): Promise<Currency> {
    return await this.currenciesRepository.findOne({ where: { id } });
  }

  async findOneByCode(code: string): Promise<Currency> {
    return await this.currenciesRepository.findOne({ where: { code } });
  }
}
