import useGetUserGeolocation from "@fb-hooks/useGetUserGeolocation";
import { fetchWeatherFromLocation } from "@fb-services/index";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { weatherLoadingSelector, weatherState } from "./Store";

const KEY = "user-location";

const useGetWeatherUserLocation = () => {
  const { longitude, latitude } = useGetUserGeolocation();
  const setWeather = useSetRecoilState(weatherState);
  const loading = useRecoilValue(weatherLoadingSelector);
  const { data } = useQuery({
    queryKey: [KEY, { longitude, latitude }],
    queryFn: () => fetchWeatherFromLocation(String(longitude), String(latitude))
  });

  useEffect(() => {
    data && setWeather(data);
  }, [data, setWeather]);

  return {
    loading
  };
};

export default useGetWeatherUserLocation;
