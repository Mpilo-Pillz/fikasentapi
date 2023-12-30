import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthCredentialsDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { ConstantsService } from 'src/constants/constants.service';
import { v4 } from 'uuid';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
    private constantsService: ConstantsService,
  ) {}

  async create(authCredentialsDto: AuthCredentialsDto): Promise<Partial<User>> {
    const hashedPassword = await bcrypt.hash(authCredentialsDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: authCredentialsDto.email,
        password: hashedPassword,
        activationCode: v4(),
        activationCodeExpiry: (() => {
          const date = new Date();
          date.setDate(
            date.getDate() +
              this.constantsService.ACTIVATION_CODE_EXPIRY_IN_DAYS,
          );
          return date;
        })(),
        isActive: true,
      },
    });

    const { password, ...result } = user;
    return result;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }
}
