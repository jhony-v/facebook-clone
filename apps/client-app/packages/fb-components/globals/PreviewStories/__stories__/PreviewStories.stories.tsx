import { storiesMocks } from "@mocks/index";
import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import PreviewStories from "..";
import HistoryUserItem from "../Atoms/HistoryUserItem";

export default {
  title: "Globals/PreviewStories",
  component: PreviewStories
} as Meta;

export const Default = () => (
  <PreviewStories
    data={storiesMocks.getPreviewUserStories()}
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
