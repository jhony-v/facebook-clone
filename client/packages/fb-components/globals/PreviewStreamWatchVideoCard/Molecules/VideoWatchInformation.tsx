import FlexWrapper from "@fb-components/FlexWrapper";
import LiveMicroText from "@fb-components/LiveMicroText";
import SquareImage from "@fb-components/SquareImage";
import TotalViews from "@fb-components/TotalViews";
import Wrapper from "@fb-components/Wrapper";
import { StreamWrapperMicroOptions } from "../Atoms/elements";

export type VideoWatchInformationProps = {
    poster: string;
    live?: boolean;
    totalViews?: number;  
}

const VideoWatchInformation = ({poster,live,totalViews} : VideoWatchInformationProps) => {
  return (
    <Wrapper>
      <SquareImage src={poster} h="180px" />
      <StreamWrapperMicroOptions>
          {live && <LiveMicroText live={live} />}
          {totalViews && <TotalViews total={totalViews} />}
      </StreamWrapperMicroOptions>
    </Wrapper>
  );
};

export default VideoWatchInformation;
