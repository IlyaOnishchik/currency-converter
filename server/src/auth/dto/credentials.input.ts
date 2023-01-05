import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CredentialsInput {
  @Field()
  email: string;

  @Field()
  password: string;
}