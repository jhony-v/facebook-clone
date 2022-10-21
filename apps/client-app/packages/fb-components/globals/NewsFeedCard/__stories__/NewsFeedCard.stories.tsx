import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import { FaGlobeAsia } from "react-icons/fa";
import NewsFeedCard from "..";

export default {
  title: "Globals/NewsFeedCard",
  component: NewsFeedCard
} as Meta;

export const Default = () => (
  <NewsFeedCard>
    <NewsFeedCard.Header
      user={{
        avatar: faker.image.people(),
        name: faker.name.firstName()
      }}
      detail={{
        icon: FaGlobeAsia,
        text: "10/02/2001"
      }}
    />
    <NewsFeedCard.Body
      image={faker.random.image()}
      text="This is a new post created for me"
    />
    <NewsFeedCard.DetailReaction
      reactions={[
        {
          reaction: "Like"
        },
        {
          reaction: "Angry"
        }
      ]}
      totalReactions={200}
      textTotalDetail="366 comments"
    />
  </NewsFeedCard>
);
