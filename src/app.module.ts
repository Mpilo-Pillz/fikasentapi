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
import { PrismaModule } from './prisma/prisma.module';
import { TsanyelaModule } from './tsanyela/tsanyela.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: `.env.${process.env.NODE_ENV}`,
      envFilePath: `.env`,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (config: ConfigService) => {
    //     return {
    //       type: 'sqlite',
    //       database: config.get<string>('DB_NAME'),
    //       entities: [Training],
    //       synchronize: true,
    //     };
    //   },
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const dbConfig = {
          synchronize: false,
        };
        switch (process.env.NODE_ENV) {
          case 'development':
            Object.assign(dbConfig, {
              type: 'sqlite',
              database: 'db.sqlite',
              entities: [__dirname + '/cv/**/*.entity.js'],
              // entities: ['**/*.entity.js'],
            });

            return dbConfig;
          case 'test':
            Object.assign(dbConfig, {
              type: 'sqlite',
              database: 'test.sqlite',
              entities: ['**/*.entity.ts'],
            });
            return dbConfig;

          case 'production':
            Object.assign(dbConfig, {
              type: 'mysql',
              url: process.env.DB_URL,
              synchronize: false,
              useUnifiedTopology: true,
              entities: ['**/*.entity.js'],
              ssl: { rejectUnauthorized: false },
            });

            return dbConfig;

          default:
            throw new Error('Unknown environment');
        }
      },
    }),
    HttpModule,
    ThirdpartyApisModule,
    CvModule,
    PrismaModule,
    TsanyelaModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, ConstantsService],
})
export class AppModule {}
