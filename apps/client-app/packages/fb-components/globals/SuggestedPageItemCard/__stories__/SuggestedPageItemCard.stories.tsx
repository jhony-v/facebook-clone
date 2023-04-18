import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import SuggestedPageItemCard from "..";

export default {
  title: "Globals/SuggestedPageItemCard",
  component: SuggestedPageItemCard
} as Meta;

export const Default = () => (
  <SuggestedPageItemCard
    image={faker.random.image()}
    avatar={faker.random.image()}
    liked
    likes={40}
    category="Software"
    name="Club de Programación"
  />
);
