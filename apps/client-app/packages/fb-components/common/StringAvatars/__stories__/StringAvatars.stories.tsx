import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import StringAvatars from "..";

export default {
  title: "Common/StringAvatars",
  component: StringAvatars
} as Meta;

const images = [
  faker.random.image(),
  faker.random.image(),
  faker.random.image(),
  faker.random.image()
];

export const Default = () => <StringAvatars images={images} />;
