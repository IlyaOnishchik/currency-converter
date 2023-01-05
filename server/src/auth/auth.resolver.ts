import { ConflictException, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from 'src/users/users.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { CredentialsInput } from './dto/credentials.input';
import { JwtPayload } from './dto/jwt-payload.interface';

@Resolver(() => String)
export class AuthResolver {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService
    ) {}
  
    @Mutation(() => String)
    async signIn(@Args('credentials') credentials: CredentialsInput): Promise<string> {
      const { email, password } = credentials;
      const user = await this.usersService.findOneByEmail(email);
      if (!user) throw new UnauthorizedException('User not found!');
      const isMatch = bcrypt.compareSync(password, user.passwordHash);
      if (!isMatch) throw new UnauthorizedException('Wrong password!');
      const payload: JwtPayload = { id: user.id, email: user.email };
      const accessToken = this.jwtService.sign(payload);
      return accessToken;
    }
  
    @Mutation(() => String)
    async signUp(@Args('credentials') credentials: CredentialsInput): Promise<string> {
      const { email, password } = credentials;
      const candidate = await this.usersService.findOneByEmail(email);
      if (candidate) throw new ConflictException('User with this email already exists!');
      const passwordHash = await bcrypt.hash(password, 5);
      const user = new User();
      user.email = email;
      user.passwordHash = passwordHash;
      const newUser = await this.usersService.create(user);
      const payload: JwtPayload = { id: newUser.id, email: newUser.email };
      const accessToken = this.jwtService.sign(payload);
      return accessToken;
    }

    @Query(() => User, { name: 'currentUser' })
    @UseGuards(JwtAuthGuard)
    getCurrentUser(@CurrentUser() user: User) {
      return this.usersService.findOneByEmail(user.email)
    }
}