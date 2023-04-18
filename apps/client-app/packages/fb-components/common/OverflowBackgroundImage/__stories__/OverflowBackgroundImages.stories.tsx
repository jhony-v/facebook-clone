import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import OverflowBackgroundImage from "..";

export default {
  title: "Common/OverflowBackgroundImage",
  component: OverflowBackgroundImage
} as Meta;

export const Default = () => (
  <div style={{ width: "300px", height: "300px", position: "relative" }}>
    <OverflowBackgroundImage image={faker.random.image()}>
      {faker.lorem.lines(3)}
    </OverflowBackgroundImage>
  </div>
);
