import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('currencies')
@ObjectType()
export class Currency {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  code: string;

  @Column()
  @Field()
  symbol: string;

  @Column({ unique: true })
  @Field()
  name: string;

  @Column()
  @Field()
  imageName: string;

  @OneToMany(() => User, user => user.basicCurrency)
  @Field(() => [User], { nullable: true })
  usersWhereBase: User[];

  @ManyToMany(() => User, user => user.favoriteCurrencies)
  @Field(() => [User], { nullable: true })
  usersWhereFavorite: User[];
}