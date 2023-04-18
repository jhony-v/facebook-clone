import { atom, selector } from "recoil";

export interface IWeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface IWeatherDescription {
  main: string;
  description: string;
  icon: string;
}

export const weatherState = atom({
  key: "weatherState",
  default: {}
});

export const weatherDescriptionSelector = selector({
  key: "weatherDescriptionSelector",
  get: ({ get }) => {
    const { weather } = get(weatherState) as {
      weather: IWeatherDescription[];
    };
    return weather[0];
  }
});

export const weatherLoadingSelector = selector({
  key: "weatherLoadingSelector",
  get: ({ get }) => {
    const value = get(weatherState);
    return Object.keys(value).length === 0;
  }
});

export const weatherMainSelector = selector({
  key: "weatherMainSelector",
  get: ({ get }) => {
    const { main } = get(weatherState) as { main: IWeatherMain };
    return {
      ...main,
      temp: `${Math.floor(main.temp)}°`
    };
  }
});
