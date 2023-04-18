import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import { memo } from "react";
import SubtitleTextDetail from "./SubtitleTextDetail";

type ItemDayWeatherProps = {
  day: string;
  description: string;
  celcius: {
    min: string;
    max: string;
  };
};
const ItemDayWeather = (props: ItemDayWeatherProps) => {
  const { celcius, day, description } = props;
  return (
    <FlexWrapper align="center">
      <Wrapper />
      <Wrapper>
        <SubtitleTextDetail primaryTitle title={day} subtitle={description} />
      </Wrapper>
      <Wrapper m="0 0 0 auto">
        <SubtitleTextDetail
          horizontal
          primaryTitle
          title={celcius.min}
          subtitle={celcius.max}
        />
      </Wrapper>
    </FlexWrapper>
  );
};

export default memo(ItemDayWeather);
