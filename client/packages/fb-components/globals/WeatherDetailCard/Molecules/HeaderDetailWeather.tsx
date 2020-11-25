import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import SubtitleTextDetail from "../Atoms/SubtitleTextDetail";

const HeaderDetailWeather = () => {
  const props = {
    location : "Lima",
    weather : "22°",
    detail : {
      title : "H 23º  L 16°",
      subtitle : "Partly Cloudy"
    }
  }
  return (
    <FlexWrapper flexDirection="column">
      <Wrapper>
        <Wrapper m="0 0 10px 0">
          <TextLabel weight textColor="vgTextBlack" textSize={800}>
            Weather in {props.location}
          </TextLabel>
        </Wrapper>
        <FlexWrapper>
          <Wrapper m="0 20px 0 0">
            <TextLabel weight textColor="vgTextBlack" textSize={800}>
              {props.weather}
            </TextLabel>
          </Wrapper>
          <FlexWrapper>
            <SubtitleTextDetail {...props.detail} weight />
          </FlexWrapper>
        </FlexWrapper>
      </Wrapper>
    </FlexWrapper>
  );
};

export default HeaderDetailWeather;
