import { IsString } from 'class-validator';

export class WeatherDto {
  @IsString()
  cityName: string;

  @IsString()
  units: string;

  @IsString()
  lat: string;

  @IsString()
  lng: string;
}

export class CryptoCurrencyDto {
  @IsString()
  cryptoCoin: string;
}
