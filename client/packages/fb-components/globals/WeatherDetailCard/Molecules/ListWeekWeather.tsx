import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import SubtitleTextDetail from "../Atoms/SubtitleTextDetail";

type ItemDayWeatherProps = {};
const ItemDayWeather = (props: ItemDayWeatherProps) => {
  return (
    <FlexWrapper align="center">
      <Wrapper>
      </Wrapper>
      <Wrapper>
          <SubtitleTextDetail primaryTitle title="Thursday" subtitle="Partly Cloudy" />
      </Wrapper>
      <Wrapper m="0 0 0 auto">
          <SubtitleTextDetail horizontal primaryTitle title="24°C" subtitle="16° C" />
      </Wrapper>
    </FlexWrapper>
  );
};

const ListWeekWeather = () => {
    return(
        <Wrapper m="1em 0">
            {Array(6).fill(0).map((e,i) =>(
                <Wrapper key={i} m="30px 0">
                    <ItemDayWeather />
                 </Wrapper>   
            ))}
        </Wrapper>
    )
};

export default ListWeekWeather;
