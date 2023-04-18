import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import StreamByUserProfileCard from "..";

export default {
  title: "Globals/StreamByUserProfileCard",
  component: StreamByUserProfileCard
} as Meta;

export const Default = () => (
  <StreamByUserProfileCard
    image={faker.image.people()}
    following
    description="Creating web projects"
    title="Marcos Villalobos"
    textDetail="10 followers"
    totalViews={4}
  />
);
