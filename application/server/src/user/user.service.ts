import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserServiceBase } from "./base/user.service.base";
import { PasswordService } from "../auth/password.service";
import { UserCreateInput } from "./base/UserCreateInput";
import { User } from "./base/User"

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService);
  }

  async createUser(data: UserCreateInput): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({
      where: { username: data.username },
    });

    if (existingUser) {
      throw new Error(`User with username "${data.username}" already exists`);
    }

    return this.prisma.user.create({
      data,
    });
  }
}
