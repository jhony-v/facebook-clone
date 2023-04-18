import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import AccoountProfileBanner from "..";

export default {
  title: "Globals/AccoountProfileBanner",
  component: AccoountProfileBanner
} as Meta;

export const Default = () => (
  <AccoountProfileBanner
    avatar={faker.random.image()}
    backgroundImage={faker.random.image()}
    text="Mark Jimenes"
  />
);
