import { Module } from '@nestjs/common';
import { ThirdpartyApisService } from './thirdparty-apis.service';
import { ThirdpartyApisController } from './thirdparty-apis.controller';
import { HttpModule } from '@nestjs/axios';
import { ConstantsService } from 'src/constants/constants.service';

@Module({
  imports: [HttpModule],
  providers: [ThirdpartyApisService, ConstantsService],
  controllers: [ThirdpartyApisController],
})
export class ThirdpartyApisModule {}
