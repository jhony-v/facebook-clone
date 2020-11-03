import React from "react";
import faker from "faker";
import { FaGlobeAsia } from "react-icons/fa";
import NewsFeedCard from "@fb-components/NewsFeedCard";

const data = Array(10)
  .fill(0)
  .map(() => ({
    user: {
      username: faker.name.firstName() + " " + faker.name.lastName(),
      avatar: faker.random.image(),
    },
    detail: {
      text: faker.address.county(),
      icon: FaGlobeAsia,
    },
    publication: {
      text: faker.lorem.paragraph(2),
      image: faker.random.image(),
    },
  }));

const reactions = [{
  reaction : "Angry"
},{
  reaction : "Haha"
}]  

const NewsFeedExample = () => {
  return (
    <div>
      {data.map((e, i) => (
        <NewsFeedCard key={i}>
          <NewsFeedCard.Header user={e.user} detail={e.detail} />
          <NewsFeedCard.Body {...e.publication} />
          <NewsFeedCard.DetailReaction  reactions={reactions} totalReactions={"40 mil"} textTotalDetail="60 comments" />
        </NewsFeedCard>
      ))}
    </div>
  );
};

export default NewsFeedExample;
