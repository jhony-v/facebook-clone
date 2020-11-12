import React from "react";
import { StreamWrapperVideoCard } from "./Atoms/elements";
import VideoDetailStreamInformation, { VideoDetailStreamInformationProps } from "./Molecules/VideoDetailStreamInformation";
import VideoWatchInformation, { VideoWatchInformationProps } from "./Molecules/VideoWatchInformation";

type PreviewStreamWatchVideoCardProps = VideoWatchInformationProps & {
  detailStream: VideoDetailStreamInformationProps;
};

const PreviewStreamWatchVideoCard = (props : PreviewStreamWatchVideoCardProps) => {
  return <StreamWrapperVideoCard>
      <VideoWatchInformation poster={props.poster} live={props.live} totalViews={props.totalViews}  />
      <VideoDetailStreamInformation {...props.detailStream} />
  </StreamWrapperVideoCard>

};

export default PreviewStreamWatchVideoCard;
