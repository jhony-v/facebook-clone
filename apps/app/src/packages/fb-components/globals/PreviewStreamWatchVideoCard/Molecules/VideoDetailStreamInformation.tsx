import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { AvatarStreaming } from "../Atoms/elements";

export type VideoDetailStreamInformationProps = {
  title?: string;
  detail?: string;
  avatar?: string;
};
const VideoDetailStreamInformation = (
  props: VideoDetailStreamInformationProps
) => {
  const { title, avatar, detail } = props;
  return (
    <Wrapper m="15px 0">
      <FlexWrapper align="center">
        <Wrapper>
          <AvatarStreaming src={avatar} />
        </Wrapper>
        <Wrapper m="0 0 0 10px">
          <TextLabel block weight textColor="vgTextBlack">
            {title}
          </TextLabel>
          <Wrapper p="5px 0 0 0">
            <TextLabel weight textSize={200}>
              {detail}
            </TextLabel>
          </Wrapper>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default VideoDetailStreamInformation;
