import React from "react";
import { VideoPlayer } from "./Atoms/element";

type VideoMediaPlayerProps = {
  src?: string;
  poster?: string;
  dimension?: {
    w?: string;
    h?: string;
  };
  autoplay?: boolean;
};
const VideoMediaPlayer = (props: VideoMediaPlayerProps) => {
  return (
    <div>
      <VideoPlayer />
    </div>
  );
};

export default VideoMediaPlayer;
