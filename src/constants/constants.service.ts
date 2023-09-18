import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstantsService {
  CRYPTO_BASE_URL = process.env.CRYPTO_BASE_URL;
  CRYPTO_API_KEY = process.env.CRYPTO_API_KEY;
  WEATHER_BASE_URL = process.env.WEATHER_BASE_URL;
  WEATHER_API_KEY = process.env.WEATHER_API_KEY;
}
