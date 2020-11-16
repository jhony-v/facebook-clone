import React from "react";
import PreviewStories from "@fb-components/PreviewStories";
import HistoryUserItem from "@fb-components/PreviewStories/Atoms/HistoryUserItem";
import { useGetPreviewUserStories } from "@fb-features-recoil/userStories";
import faker from "faker";

export default () => {
  const { data } = useGetPreviewUserStories();
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
