import HeaderDetailWeather from "./Molecules/HeaderDetailWeather";
import MainWrapper from "./Atoms/MainWrapper";
import ListWeekWeather from "./Molecules/ListWeekWeather";
import useGetWeatherUserLocation from "./Store/useGetWeatherUserLocation";
import { SpinnerWithSpacing } from "./Atoms/elements";

const WeatherDetailCard = () => {
  const { loading } = useGetWeatherUserLocation();
  if (loading) return <SpinnerWithSpacing />;
  return (
    <MainWrapper>
      <HeaderDetailWeather />
      <ListWeekWeather />
    </MainWrapper>
  );
};

export default WeatherDetailCard;
