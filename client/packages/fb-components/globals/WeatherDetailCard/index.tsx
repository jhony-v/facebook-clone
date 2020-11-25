import HeaderDetailWeather from "./Molecules/HeaderDetailWeather";
import MainWrapper from "./Atoms/MainWrapper";
import ListWeekWeather from "./Molecules/ListWeekWeather";

const WeatherDetailCard = () => {
  return <MainWrapper>
      <HeaderDetailWeather/>
      <ListWeekWeather/>
  </MainWrapper>;
};

export default WeatherDetailCard;
