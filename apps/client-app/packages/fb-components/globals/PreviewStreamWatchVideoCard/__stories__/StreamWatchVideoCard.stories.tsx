import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import StreamWatchVideoCard from "..";

export default {
  title: "Globals/StreamWatchVideoCard",
  component: StreamWatchVideoCard
} as Meta;

export const Default = () => (
  <StreamWatchVideoCard
    detailStream={{
      avatar: faker.random.image(),
      detail: "Detail of post example. Welcome to my first video",
      title: "Post example"
    }}
    poster={faker.random.image()}
    live
    totalViews={200}
  />
);
