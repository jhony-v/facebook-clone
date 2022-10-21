import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import UserResultSearchedCard from "..";

export default {
  title: "Globals/UserResultSearchedCard",
  component: UserResultSearchedCard
} as Meta;

export const Default = () => (
  <UserResultSearchedCard
    avatar={faker.random.image()}
    fullName="Juan Mateo | Coder"
    description="Software Developer at a Pinterest"
    subtitle="124 Friends"
  />
);
