import { Meta } from "@storybook/react/types-6-0";
import VideoMediaPlayer from "..";

export default {
  title: "Globals/VideoMediaPlayer",
  component: VideoMediaPlayer
} as Meta;

const poster =
  "https://cdn.pixabay.com/photo/2020/10/14/22/32/buildings-5655593__340.jpg";
const video =
  "https://player.vimeo.com/external/449623829.hd.mp4?s=82893a1e42c7c1b177128a86a6253b7c4d1f071f&profile_id=174";

export const Default = () => (
  <VideoMediaPlayer src={video} poster={poster} objectFit="cover" />
);
