import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrenciesService } from './currencies.service';
import { Currency } from './entites/currency.entity';
import { CreateCurrencyInput } from './inputs/create-currency.input';

@Resolver()
export class CurrenciesResolver {
  constructor(
    private currenciesService: CurrenciesService
  ) {}

  @Mutation(() => Currency, { name: 'createCurrency' })
  async create(@Args('createCurrencyInput') createCurrencyInput: CreateCurrencyInput): Promise<Currency> {
    const { code, symbol, name, imageName } = createCurrencyInput;
    const currency = await this.currenciesService.create(code, symbol, name, imageName);
    return currency;
  }

  @Query(() => [Currency], { name: 'currencies' })
  async findAll(
    @Args('codes', { nullable: true, type: () => [String] }) codes: string[]
  ): Promise<Currency[]> {
    if (codes) return await this.currenciesService.findManyByCodes(codes);
    return await this.currenciesService.findAll();
  }

  @Query(() => Currency, { name: 'currency' })
  async findOne(
    @Args('id', { nullable: true }) id: string,
    @Args('code', { nullable: true }) code: string
  ): Promise<Currency> {
    if (id) return await this.currenciesService.findOneById(id);
    if (code) return await this.currenciesService.findOneByCode(code);
    return await this.currenciesService.findOneByCode('USD');
  }
}
