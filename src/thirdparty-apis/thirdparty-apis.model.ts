export interface WeatherResponse {
  name: string;
  main: WeatherData;
  weather: Weather[];
}

interface WeatherData {
  temp: number;
}

interface Weather {
  id: number;
  description: string;
}

export interface CoinData {
  time: Date;
  asset_id_base: string;
  asset_id_quote: string;
  rate: number;
}
