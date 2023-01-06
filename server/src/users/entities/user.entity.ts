import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";

import { Currency } from "src/currencies/entites/currency.entity";

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column()
  passwordHash: string;

  @ManyToOne(() => Currency, currency => currency.usersWhereBase)
  @Field(() => Currency, { nullable: true })
  basicCurrency: Currency;

  @ManyToMany(() => Currency, currency => currency.usersWhereFavorite)
  @JoinTable({ name: 'users_currencies', joinColumn: { name: 'userId' }, inverseJoinColumn: { name: 'currencyId' } })
  @Field(() => [Currency], { nullable: true })
  favoriteCurrencies: Currency[];
}