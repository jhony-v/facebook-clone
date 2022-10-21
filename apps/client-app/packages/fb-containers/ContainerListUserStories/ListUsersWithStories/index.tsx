import Wrapper from "@fb-components/common/Wrapper";
import TextLabel from "@fb-components/common/TextLabel";
import faker from "faker";
import UserStory from "./UserStory";

const ListUsersWithStories = () => (
  <Wrapper p="10px">
    <TextLabel weight block textColor="vgTextBlack">
      All stories
    </TextLabel>
    <Wrapper m="10px -10px">
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <UserStory
            key={i}
            totalsNewStory={2}
            lastDatetimeStory="1 h"
            user={{
              avatar: faker.random.image(),
              fullName: faker.name.lastName()
            }}
          />
        ))}
    </Wrapper>
  </Wrapper>
);

export default ListUsersWithStories;
