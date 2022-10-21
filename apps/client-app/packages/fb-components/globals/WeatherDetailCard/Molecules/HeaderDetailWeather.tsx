import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { useRecoilValue } from "recoil";
import SubtitleTextDetail from "../Atoms/SubtitleTextDetail";
import {
  weatherDescriptionSelector,
  weatherMainSelector
} from "../Store/Store";

const HeaderDetailWeather = () => {
  const { description } = useRecoilValue(weatherDescriptionSelector);
  const { temp } = useRecoilValue(weatherMainSelector);

  return (
    <FlexWrapper flexDirection="column">
      <Wrapper>
        <Wrapper m="0 0 10px 0">
          <TextLabel weight textColor="vgTextBlack" textSize={800}>
            Weather in{" "}
          </TextLabel>
        </Wrapper>
        <FlexWrapper>
          <Wrapper m="0 20px 0 0">
            <TextLabel weight textColor="vgTextBlack" textSize={800}>
              {temp}
            </TextLabel>
          </Wrapper>
          <FlexWrapper>
            <SubtitleTextDetail title={temp} subtitle={description} weight />
          </FlexWrapper>
        </FlexWrapper>
      </Wrapper>
    </FlexWrapper>
  );
};

export default HeaderDetailWeather;
