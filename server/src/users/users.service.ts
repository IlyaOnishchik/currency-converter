import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from 'src/currencies/entites/currency.entity';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  async findOneByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({ 
      where: { email }, 
      relations: {
        basicCurrency: true, 
        favoriteCurrencies: true
      } 
    });
  }

  async create(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async setBasicCurrency(id: string, basicCurrency: Currency): Promise<boolean> {
    const result = await this.usersRepository.update(id, { basicCurrency });
    return !!result.affected;
  }

  async toggleFavoriteCurrency(id: string, favoriteCurrency: Currency): Promise<boolean> {
    let user = await this.usersRepository.findOne({ where: { id }, relations: { favoriteCurrencies: true } });
    user.favoriteCurrencies.find(item => item.id === favoriteCurrency.id)
      ? user.favoriteCurrencies = user.favoriteCurrencies.filter(item => item.id !== favoriteCurrency.id)
      : user.favoriteCurrencies.push(favoriteCurrency)
    await this.usersRepository.save(user);
    return true
  }
}
