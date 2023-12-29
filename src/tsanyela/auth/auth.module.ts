import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConstantsService } from 'src/constants/constants.service';

@Module({
  imports: [
    // other modules
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Set this in your .env
      signOptions: { expiresIn: '3600' }, // Token expiry
    }),
  ],
  providers: [AuthService, UserService, PrismaService, ConstantsService],
  controllers: [AuthController],
})
export class AuthModule {}
