import React from "react";
import NewsFeedCard from "../../components/NewsFeedCard";
import faker from "faker";
import { FaGlobeAsia } from "react-icons/fa";

export default {
  title: "Components/NewsFeedCard",
  component: NewsFeedCard,
  decorators: [
    (Story) => (
      <div style={{ width: "500px", margin: "auto" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return (
    <NewsFeedCard>
      <NewsFeedCard.Header
        user={{
          username: faker.name.firstName(),
          avatar: faker.random.image(),
        }}
        detail={{
          text : faker.address.county(),
          icon : FaGlobeAsia
        }}
      />
      <NewsFeedCard.Body
        text={faker.lorem.paragraph(2)}
        image={faker.random.image()}
      />
    </NewsFeedCard>
  );
};
