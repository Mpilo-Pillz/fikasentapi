import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstantsService {
  CRYPTO_BASE_URL = 'https://rest.coinapi.io/v1/exchangerate';
  CRYPTO_API_KEY = process.env.CRYPTO_API_KEY;
  WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  WEATHER_API_KEY = process.env.WEATHER_API_KEY;
  DB_URL = process.env.DB_URL;
}
