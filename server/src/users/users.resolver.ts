import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrenciesService } from 'src/currencies/currencies.service';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private currenciesService: CurrenciesService
  ) {}

  @Mutation(() => Boolean, { name: 'setUserBasicCurrency' })
  @UseGuards(JwtAuthGuard)
  async setBasicCurrency(
    @CurrentUser() user: User,
    @Args('currencyId') currencyId: string
  ): Promise<boolean> {
    const currency = await this.currenciesService.findOneById(currencyId);
    return this.usersService.setBasicCurrency(user.id, currency);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async toggleUserFavoriteCurrency(
    @CurrentUser() user: User,
    @Args('currencyId') currencyId: string
  ): Promise<boolean> {
    const currency = await this.currenciesService.findOneById(currencyId);
    return this.usersService.toggleFavoriteCurrency(user.id, currency);
  }
}
