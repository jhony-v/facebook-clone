import LiveMicroText from "@fb-components/common/LiveMicroText";
import SquareImage from "@fb-components/common/SquareImage";
import TotalViews from "@fb-components/common/TotalViews";
import Wrapper from "@fb-components/common/Wrapper";
import { StreamWrapperMicroOptions } from "../Atoms/elements";

export type VideoWatchInformationProps = {
  poster: string;
  live?: boolean;
  totalViews?: number;
};

const VideoWatchInformation = ({
  poster,
  live,
  totalViews
}: VideoWatchInformationProps) => (
  <Wrapper>
    <SquareImage src={poster} h="180px" />
    <StreamWrapperMicroOptions>
      {live && <LiveMicroText live={live} />}
      {totalViews && <TotalViews total={totalViews} />}
    </StreamWrapperMicroOptions>
  </Wrapper>
);

export default VideoWatchInformation;
