import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import CreateNewPost from "..";

export default {
  title: "Globals/CreateNewPost",
  component: CreateNewPost
} as Meta;

export const Default = () => (
  <CreateNewPost
    inputPlaceholder=""
    onClick={() => null}
    userImage={faker.random.image()}
  />
);
