import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ConstantsService } from 'src/constants/constants.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UserService, ConstantsService, PrismaService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
