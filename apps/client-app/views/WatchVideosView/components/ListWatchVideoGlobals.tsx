import WatchVideoCard from "@fb-components/globals/WatchVideoCard";
import Wrapper from "@fb-components/common/Wrapper";
import { FaGlobeAsia } from "react-icons/fa";
import faker from "faker";

const ListWatchVideoGlobals = () => (
  <>
    {Array(10)
      .fill(0)
      .map((e, i) => (
        <Wrapper p="5px 0" key={i}>
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
        </Wrapper>
      ))}
  </>
);

export default ListWatchVideoGlobals;
