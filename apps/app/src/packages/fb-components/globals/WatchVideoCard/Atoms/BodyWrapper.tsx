import TextLabel from "@fb-components/common/TextLabel";
import VideoMediaPlayer from "@fb-components/globals/VideoMediaPlayer";
import Wrapper from "@fb-components/common/Wrapper";

type BodyWrapperProps = {
  text?: string;
  video?: string;
};
const BodyWrapper = ({ text, video }: BodyWrapperProps) => (
  <Wrapper p="20px 0">
    <Wrapper p="10px 10px 20px">
      <TextLabel textColor="vgTextBlack" weight>
        {text}
      </TextLabel>
    </Wrapper>
    <Wrapper>
      <VideoMediaPlayer autoplay src={video} h="350px" objectFit="cover" />
    </Wrapper>
  </Wrapper>
);

export default BodyWrapper;
