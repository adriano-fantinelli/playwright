import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UserResolverBase } from "./base/user.resolver.base";
import { User } from "./base/User";
import { UserService } from "./user.service";
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateUserArgs } from './base/CreateUserArgs';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@graphql.Resolver(() => User)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserResolver extends UserResolverBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @Mutation(() => User)
  async createUser(@Args() args: CreateUserArgs): Promise<User> {
    try {
      return await this.service.createUser(args.data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('already exists')) {
          throw new ConflictException(error.message);
        }
        throw new InternalServerErrorException(error.message);
      }
      throw new InternalServerErrorException('An unknown error occurred');
    }
  }
}
