import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import SquareImage from "..";

export default {
  title: "Common/SquareImage",
  component: SquareImage
} as Meta;

export const Default = () => (
  <SquareImage w="100px" h="100px" src={faker.random.image()} />
);
