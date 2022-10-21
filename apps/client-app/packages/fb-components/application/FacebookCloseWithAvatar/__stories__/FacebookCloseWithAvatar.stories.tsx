import { Meta } from "@storybook/react/types-6-0";
import FacebookCloseWithAvatar from "..";

export default {
  title: "Application/FacebookCloseWithAvatar",
  component: FacebookCloseWithAvatar
} as Meta;

export const Default = () => <FacebookCloseWithAvatar onClose={() => null} />;
