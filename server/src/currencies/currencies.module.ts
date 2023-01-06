import { Module } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CurrenciesResolver } from './currencies.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currency } from './entites/currency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Currency])],
  providers: [CurrenciesService, CurrenciesResolver],
  exports: [CurrenciesService]
})
export class CurrenciesModule {}
