import { Meta } from "@storybook/react/types-6-0";
import Reactions from "..";

export default {
  title: "Common/Reactions",
  component: Reactions.Like
} as Meta;

export const Like = () => <Reactions.Like />;

export const Love = () => <Reactions.Love />;

export const Angry = () => <Reactions.Angry />;

export const Care = () => <Reactions.Care />;

export const Sad = () => <Reactions.Sad />;

export const Haha = () => <Reactions.Haha />;
