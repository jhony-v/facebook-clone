import Wrapper from "@fb-components/common/Wrapper";
import { useRecoilValue } from "recoil";
import ItemDayWeather from "../Atoms/ItemDayWeather";
import { DAYS } from "../Config";
import { weatherDescriptionSelector } from "../Store/Store";

const ListWeekWeather = () => {
  const { description } = useRecoilValue(weatherDescriptionSelector);
  return (
    <Wrapper m="1em 0">
      {DAYS.map((e, i) => (
        <Wrapper key={i} m="30px 0">
          <ItemDayWeather
            day={e}
            description={description}
            celcius={{
              min: "10° C",
              max: "20° C"
            }}
          />
        </Wrapper>
      ))}
    </Wrapper>
  );
};

export default ListWeekWeather;
