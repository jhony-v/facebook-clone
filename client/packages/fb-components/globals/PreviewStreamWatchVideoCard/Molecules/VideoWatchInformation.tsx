import FlexWrapper from "@fb-components/FlexWrapper";
import LiveMicroText from "@fb-components/LiveMicroText";
import TotalViews from "@fb-components/TotalViews";
import VideoMediaPlayer from "@fb-components/VideoMediaPlayer";
import Wrapper from "@fb-components/Wrapper";
import { StreamWrapperMicroOptions } from "../Atoms/elements";

export type VideoWatchInformationProps = {
    video: string;
    live?: boolean;
    totalViews?: number;  
}

const VideoWatchInformation = ({video,live,totalViews} : VideoWatchInformationProps) => {
  return (
    <Wrapper>
      <VideoMediaPlayer src={video} objectFit="cover" />
      <StreamWrapperMicroOptions>
          <LiveMicroText live={live} />
          <TotalViews total={totalViews} />
      </StreamWrapperMicroOptions>
    </Wrapper>
  );
};

export default VideoWatchInformation;
