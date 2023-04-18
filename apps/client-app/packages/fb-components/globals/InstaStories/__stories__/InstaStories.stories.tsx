import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import InstaStories from "..";

export default {
  title: "Globals/InstaStories",
  component: InstaStories
} as Meta;

const userData = {
  avatar: faker.random.image(),
  fullName: faker.name.firstName(),
  userId: ""
};

const stories = [
  {
    image: faker.image.people(),
    text: "Hello from Peru 1 😂😂😂😂😂🙄",
    datetime: "1h"
  },
  {
    image: faker.image.food(),
    text: "Welcome back people :) 2 ❤💚💫",
    datetime: "2m"
  },
  {
    image: faker.image.business(),
    text: "My first post 3",
    datetime: "3m"
  },
  {
    image: faker.image.abstract(),
    text: "WELCOME BACK PEOPLE",
    datetime: "10h"
  }
];

export const Default = () => <InstaStories stories={stories} user={userData} />;
