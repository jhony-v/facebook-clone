import React from "react";
import { StreamWrapperVideoCard } from "./Atoms/elements";
import VideoDetailStreamInformation, {
  VideoDetailStreamInformationProps
} from "./Molecules/VideoDetailStreamInformation";
import VideoWatchInformation, {
  VideoWatchInformationProps
} from "./Molecules/VideoWatchInformation";

type PreviewStreamWatchVideoCardProps = VideoWatchInformationProps & {
  detailStream: VideoDetailStreamInformationProps;
};

const PreviewStreamWatchVideoCard = ({
  poster,
  live,
  totalViews,
  detailStream
}: PreviewStreamWatchVideoCardProps) => (
  <StreamWrapperVideoCard>
    <VideoWatchInformation
      poster={poster}
      live={live}
      totalViews={totalViews}
    />
    <VideoDetailStreamInformation {...detailStream} />
  </StreamWrapperVideoCard>
);

export default PreviewStreamWatchVideoCard;
