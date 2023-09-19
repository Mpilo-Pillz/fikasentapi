import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThirdpartyApisModule } from './thirdparty-apis/thirdparty-apis.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CvModule } from './cv/cv.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Training } from './cv/training/training.entity';
import { HttpModule } from '@nestjs/axios';
import { ConstantsService } from './constants/constants.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          entities: [Training],
          synchronize: true,
        };
      },
    }),
    HttpModule,
    ThirdpartyApisModule,
    CvModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, ConstantsService],
})
export class AppModule {}
