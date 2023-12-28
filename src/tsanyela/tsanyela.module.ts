import { Module } from '@nestjs/common';
import { TsanyelaService } from './tsanyela.service';
import { TsanyelaController } from './tsanyela.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { StaffModule } from './staff/staff.module';
import { StaffTypeModule } from './staff-type/staff-type.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TsanyelaService],
  controllers: [TsanyelaController],
  imports: [
    AuthModule,
    UserModule,
    StaffModule,
    StaffTypeModule,
    TaskModule,
    PrismaModule,
  ],
})
export class TsanyelaModule {}
