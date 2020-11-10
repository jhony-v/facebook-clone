import useVisibilityObserver from "@fb-hooks/useVisibilityObserver";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import ButtonPlayer from "./Atoms/ButtonPlayer";
import { VideoPlayer, VideoPlayerContainer } from "./Atoms/element";

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
  const { src, poster } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const { visibility, setElement } = useVisibilityObserver({
    threshold : [1]
  });

  useEffect(() => {
    if(playing) videoRef.current.play();
    else videoRef.current.pause();
  },[videoRef,playing])


  useEffect(() => {
    setPlaying(visibility);
  },[visibility])

  const TypeButtonPlayer = ButtonPlayer[playing ? "Pause" : "Play"];
  const playerButtonComponent =  <TypeButtonPlayer onClick={()=>setPlaying(prevState => !prevState)} />;

  return (
    <VideoPlayerContainer
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={ref => ref && setElement(ref)}
    >
      <VideoPlayer src={src} poster={poster} ref={videoRef} />
      {visible && playerButtonComponent}
    </VideoPlayerContainer>
  );
};

export default React.memo(VideoMediaPlayer);
