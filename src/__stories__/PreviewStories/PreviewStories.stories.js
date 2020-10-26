import React from "react";
import PreviewStories from "../../components/PreviewStories";
import faker from "faker";
import HistoryUserItem from "../../components/PreviewStories/Atoms/HistoryUserItem";

export default {
  title: "Components/PreviewStories",
  components: PreviewStories,
};

const data = Array(4)
  .fill(0)
  .map((e, i) => ({
    user: {
      avatar: faker.random.image(),
      username:
        faker.name.firstName() +
        " " +
        faker.name.lastName() +
        " " +
        faker.name.lastName(),
    },
    image: faker.random.image,
  }));

export const Default = () => {
  return (
    <PreviewStories
      data={data}
      userAddController={
        <HistoryUserItem
          username={faker.name.firstName()}
          avatar={faker.image.people()}
        />
      }
    >
      {(current, index) => <PreviewStories.Item key={index} {...current} />}
    </PreviewStories>
  );
};
