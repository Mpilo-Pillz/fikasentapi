import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { ConstantsService } from 'src/constants/constants.service';
import { WeatherResponse } from './thirdparty-apis.model';

@Injectable()
export class ThirdpartyApisService {
  weatherRequestURL: string;

  constructor(
    private httpService: HttpService,
    private constantsService: ConstantsService,
  ) {
    this.weatherRequestURL = `${this.constantsService.WEATHER_BASE_URL}?appid=${this.constantsService.WEATHER_API_KEY}`;
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
}
