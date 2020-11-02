import NewsFeedCard from "@fb-components/NewsFeedCard";
import { FaGlobeAsia } from "react-icons/fa";
import faker from "faker";
import FlexWrapper from "@fb-components/FlexWrapper";
import Wrapper from "@fb-components/Wrapper";
import TextLabel from "@fb-components/TextLabel";

const WatchVideoCard = () => {
  return (
    <NewsFeedCard>
      <NewsFeedCard.Header
        user={{
          avatar: faker.random.image(),
          username: faker.name.title(),
        }}
        detail={{
          icon: FaGlobeAsia,
          text: "welcome",
        }}
      />
      <Wrapper p="20px 0">
        <Wrapper p="10px 10px 20px">
          <TextLabel textColor="vgTextBlack" weight >¿Por Qué Iron Man No Usó A EDITH Contra Thanos En Avengers_ Endgame</TextLabel>
        </Wrapper>
        <Wrapper>
         <video
          src="https://player.vimeo.com/external/459802291.sd.mp4?s=c846c0ef9292600014ca216aa0be31496974e3a6&profile_id=164"
          
          controls
          muted
          style={{ width: "100%", height: "340px", objectFit: "cover" }}
          />
       </Wrapper>
      </Wrapper>
      <FlexWrapper justify="space-between" align="center">
        <Wrapper>
          <NewsFeedCard.Options />
        </Wrapper>
        <Wrapper>
          <NewsFeedCard.DetailReaction
            reactions={["Like", "Haha"]}
            totalReactions={20}
            textTotalDetail="Ok"
          />
        </Wrapper>
      </FlexWrapper>
    </NewsFeedCard>
  );
};

export default WatchVideoCard;
