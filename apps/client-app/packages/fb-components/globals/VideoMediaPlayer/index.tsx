import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import ButtonPlayer from "./Atoms/ButtonPlayer";
import { VideoPlayer, VideoPlayerContainer } from "./Atoms/element";

type VideoMediaPlayerProps = {
  src?: string;
  poster?: string;
  w?: string;
  h?: string;
  objectFit?: string;
  autoplay?: boolean;
};

const VideoMediaPlayer = (props: VideoMediaPlayerProps) => {
  const { src, poster, objectFit, w, h, autoplay } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;

  useEffect(() => {
    if (playing) videoRef.current.play();
    else videoRef.current.pause();
  }, [videoRef, playing]);

  const TypeButtonPlayer = ButtonPlayer[playing ? "Pause" : "Play"];
  const playerButtonComponent = (
    <TypeButtonPlayer onClick={() => setPlaying((prevState) => !prevState)} />
  );

  return (
    <VideoPlayerContainer
      w={w}
      h={h}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <VideoPlayer
        ref={videoRef}
        src={src}
        autoPlay={autoplay}
        poster={poster}
        objectFit={objectFit}
      />
      {visible && playerButtonComponent}
    </VideoPlayerContainer>
  );
};

export default React.memo(VideoMediaPlayer);
