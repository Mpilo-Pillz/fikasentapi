import { HttpService } from '@nestjs/axios';
import { Body, ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { ConstantsService } from 'src/constants/constants.service';
import { CoinData, WeatherResponse } from './thirdparty-apis.model';

@Injectable()
export class ThirdpartyApisService {
  weatherRequestURL: string;
  coinPriceRequestURL: string;

  constructor(
    private httpService: HttpService,
    private constantsService: ConstantsService,
  ) {
    this.weatherRequestURL = `${this.constantsService.WEATHER_BASE_URL}?appid=${this.constantsService.WEATHER_API_KEY}`;
    this.coinPriceRequestURL = `${this.constantsService.CRYPTO_BASE_URL}/BTC`;
  }
  async getWeatherByCityName(cityName: string, units = 'metric') {
    const { data } = await firstValueFrom(
      this.httpService
        .get<WeatherResponse>(
          `${this.weatherRequestURL}&units=${units}&q=${cityName}`,
        )
        .pipe(
          catchError(() => {
            throw new ForbiddenException('Something went wrong');
          }),
        ),
    );
    return data;
  }

  async getWeatherByLatLng(
    latitude: string,
    longitude: string,
    units = 'metric',
  ) {
    const { data } = await firstValueFrom(
      this.httpService
        .get<WeatherResponse>(
          `${this.weatherRequestURL}&units=${units}&lat=${latitude}&lon=${longitude}`,
        )
        .pipe(
          catchError(() => {
            throw new ForbiddenException('Something went wrong');
          }),
        ),
    );
    return data;
  }

  async getCryptoPrice(cryproCoin: string) {
    const { data } = await firstValueFrom(
      this.httpService
        .get<CoinData>(
          `${this.coinPriceRequestURL}/${cryproCoin}?apiKey=${this.constantsService.CRYPTO_API_KEY}`,
        )
        .pipe(
          catchError(() => {
            throw new ForbiddenException('Something went wrong');
          }),
        ),
    );
    return data;
  }
}
