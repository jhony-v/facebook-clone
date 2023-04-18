import useGetUserGeolocation from "@fb-hooks/useGetUserGeolocation";
import { fetchWeatherFromLocation } from "@fb-services/index";
import { useEffect } from "react";
import useSWR from "swr";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { weatherLoadingSelector, weatherState } from "./Store";

const KEY = "user-location";

const r = {
  coord: {
    lon: -77.04,
    lat: -12.05
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01n"
    }
  ],
  base: "stations",
  main: {
    temp: 17.89,
    feels_like: 16.22,
    temp_min: 17.78,
    temp_max: 18,
    pressure: 1012,
    humidity: 77
  },
  visibility: 10000,
  wind: {
    speed: 4.1,
    deg: 190
  },
  clouds: {
    all: 0
  },
  dt: 1606435497,
  sys: {
    type: 1,
    id: 8682,
    country: "PE",
    sunrise: 1606386799,
    sunset: 1606432701
  },
  timezone: -18000,
  id: 3930376,
  name: "Rímac",
  cod: 200
};

const useGetWeatherUserLocation = () => {
  const { longitude, latitude } = useGetUserGeolocation();
  const setWeather = useSetRecoilState(weatherState);
  const loading = useRecoilValue(weatherLoadingSelector);
  const { data } = useSWR<{}>(
    [KEY, longitude, latitude],
    async (_, lat, lon) => await fetchWeatherFromLocation(lat, lon),
    {
      refreshInterval: 0
    }
  );

  useEffect(() => {
    data && setWeather(data);
  }, [data]);

  return {
    loading
  };
};

export default useGetWeatherUserLocation;
