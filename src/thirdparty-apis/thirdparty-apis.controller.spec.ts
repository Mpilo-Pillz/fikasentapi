import { Test, TestingModule } from '@nestjs/testing';
import { ThirdpartyApisController } from './thirdparty-apis.controller';
import { ThirdpartyApisService } from './thirdparty-apis.service';

const weatherTestResponse = {
  coord: {
    lon: 31.1333,
    lat: -26.3167,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03n',
    },
  ],
  base: 'stations',
  main: {
    temp: 21.8,
    feels_like: 21.05,
    temp_min: 21.8,
    temp_max: 21.8,
    pressure: 1011,
    humidity: 39,
    sea_level: 1011,
    grnd_level: 881,
  },
  visibility: 10000,
  wind: {
    speed: 4.19,
    deg: 21,
    gust: 9.9,
  },
  clouds: {
    all: 31,
  },
  dt: 1695140375,
  sys: {
    country: 'SZ',
    sunrise: 1695095343,
    sunset: 1695138599,
  },
  timezone: 7200,
  id: 934985,
  name: 'Mbabane',
  cod: 200,
};
describe('ThirdpartyApisController', () => {
  let controller: ThirdpartyApisController;
  let thirdpartyApisService: Partial<ThirdpartyApisService>;

  beforeEach(async () => {
    thirdpartyApisService = {
      getWeatherByLatLng: (lat, lng, units) => {
        return Promise.resolve(weatherTestResponse);
      },
      getWeatherByCityName: (cityName, units) => {
        return Promise.resolve(weatherTestResponse);
      },
    };
    // Add to the DI container
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThirdpartyApisController],
      providers: [
        {
          provide: ThirdpartyApisService,
          useValue: thirdpartyApisService,
        },
      ],
    }).compile();

    controller = module.get<ThirdpartyApisController>(ThirdpartyApisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('', () => {});
});
