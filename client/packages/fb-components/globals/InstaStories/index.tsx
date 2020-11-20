import styled from "styled-components";
import faker from "faker";
import TextLabel from "@fb-components/common/TextLabel";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import Avatar from "@fb-components/common/Avatar";
import { converMeasureCSSToNumber } from "@utils/transforms";

const RootStory = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  background-color: #303030;
  width: 300px;
  height: 500px;
  margin: auto;
`;

const RootMainStory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const RootStoryBodyBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(35deg, rgba(0, 0, 0, 0.2) 20%, transparent 100%);
`;

const ImageStory = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const RootStoryBody = styled.div`
  background:linear-gradient(180deg,rgba(0,0,0,.3) 30%, transparent 80%, rgba(0,0,0,.3) 100%);
  width: 100%;
  height: 100%;
  position: relative;
`;
const position = "15px";

const FooterStory = styled.div`
  position: absolute;
  bottom: ${position};
  left: ${position};
`;

const TextStory = styled(TextLabel)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes[300]};
`;

const UserDetailStoryWrapper = styled.div`
  position: absolute;
  left: ${position};
  top: ${converMeasureCSSToNumber(position) * 2}px;
`;

const ProgressStoryWrapper = styled.div`
  position: absolute;
  top: ${position};
  left: ${position};
  width: calc(100% - ${converMeasureCSSToNumber(position) * 2}px);
  display: flex;
  align-items: center;
`;

const ProgressStoryTrack = styled.div`
  height: 4px;
  width: 100%;
  background-color: rgba(220, 220, 220, 0.4);
  border-radius:10px;
`;

const ProgressStoryThumb = styled.div<{ w?: number }>`
  height: 100%;
  width: ${(props) => props.w}%;
  background-color: white;
  border-radius:10px;
`;

const ProgressStory = ({w}:{w?:number}) => {
  return (
    <Wrapper m="0 5px 0 0" w="100%">
      <ProgressStoryTrack>
        <ProgressStoryThumb w={w} />
      </ProgressStoryTrack>
    </Wrapper>
  );
};

const UserDetailStory = () => {
  return (
    <UserDetailStoryWrapper>
      <FlexWrapper align="center">
        <Wrapper m="0 10px 0 0">
          <Avatar src={faker.random.image()} />
        </Wrapper>
        <TextStory>Jhony Vega</TextStory>
      </FlexWrapper>
    </UserDetailStoryWrapper>
  );
};

const ProgressTimerStory = () => {
  return (
    <ProgressStoryWrapper>
      <ProgressStory w={100} />
      <ProgressStory w={100} />
      <ProgressStory w={20} />
    </ProgressStoryWrapper>
  );
};

const InstaStories = () => {
  return (
    <RootStory>
      <RootMainStory>
        <ImageStory draggable="false" src={faker.random.image()} />
        <RootStoryBodyBackground />
        <RootStoryBody>
          <UserDetailStory />
          <ProgressTimerStory />
          <FooterStory>
            <TextStory>Hello from Peru 😀😀😀</TextStory>
          </FooterStory>
        </RootStoryBody>
      </RootMainStory>
    </RootStory>
  );
};

export default InstaStories;
