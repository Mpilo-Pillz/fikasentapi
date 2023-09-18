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
