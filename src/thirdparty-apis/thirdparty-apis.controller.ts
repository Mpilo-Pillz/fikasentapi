import { Controller, Get, Query } from '@nestjs/common';
import { ThirdpartyApisService } from './thirdparty-apis.service';
import { query } from 'express';
import { WeatherDto } from './thirdparty-apis.dto';

@Controller('thirdparty')
export class ThirdpartyApisController {
  constructor(private thirdpartyApisService: ThirdpartyApisService) {}

  @Get('/city-name')
  getWeatherByCityName(@Query() query: WeatherDto) {
    return this.thirdpartyApisService.getWeatherByCityName(
      query.cityName,
      query.units,
    );
  }

  @Get('/geo-location')
  getWeatherByLatLng(@Query() query: WeatherDto) {
    return this.thirdpartyApisService.getWeatherByLatLng(
      query.lat,
      query.lng,
      query.units,
    );
  }
}
