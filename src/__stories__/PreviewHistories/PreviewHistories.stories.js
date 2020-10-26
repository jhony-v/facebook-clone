import React from "react";
import PreviewHistories from "../../components/PreviewHistories";
import faker from "faker";
import HistoryUserItem from "../../components/PreviewHistories/Atoms/HistoryUserItem";

export default {
  title: "Components/PreviewHistories",
  components: PreviewHistories,
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
    <PreviewHistories
      data={data}
      userAddController={
        <HistoryUserItem
          username={faker.name.firstName()}
          avatar={faker.image.people()}
        />
      }
    >
      {(current, index) => <PreviewHistories.Item key={index} {...current} />}
    </PreviewHistories>
  );
};
