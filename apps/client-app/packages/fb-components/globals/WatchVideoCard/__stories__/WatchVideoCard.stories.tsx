import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import { FaGlobeAsia } from "react-icons/fa";
import WatchVideoCard from "..";

export default {
  title: "Globals/WatchVideoCard",
  component: WatchVideoCard
} as Meta;

export const Default = () => (
  <WatchVideoCard
    text="¿Por Qué Iron Man No Usó A EDITH Contra Thanos En Avengers_ Endgame"
    video="https://player.vimeo.com/external/459802291.sd.mp4?s=c846c0ef9292600014ca216aa0be31496974e3a6&profile_id=164"
    reactions={
      <WatchVideoCard.DetailReactions
        reactions={[
          { reaction: "Like" },
          { reaction: "Haha" },
          { reaction: "Love" }
        ]}
      />
    }
  >
    <WatchVideoCard.Header
      user={{
        avatar: faker.random.image(),
        name: faker.name.title()
      }}
      detail={{
        icon: FaGlobeAsia,
        text: "welcome"
      }}
    />
  </WatchVideoCard>
);
