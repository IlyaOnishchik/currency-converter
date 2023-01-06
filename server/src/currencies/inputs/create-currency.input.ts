import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCurrencyInput {
  @Field()
  code: string;

  @Field()
  symbol: string;

  @Field()
  name: string;

  @Field()
  imageName: string;
}