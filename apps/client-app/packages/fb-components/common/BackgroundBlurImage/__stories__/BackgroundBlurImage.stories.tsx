import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import BackgroundBlurImage from "..";

export default {
  title: "Common/BackgroundBlurImage",
  component: BackgroundBlurImage
} as Meta;

export const Default = () => (
  <BackgroundBlurImage image={faker.random.image()} />
);
