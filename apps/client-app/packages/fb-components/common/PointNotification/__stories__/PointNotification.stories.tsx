import { Meta } from "@storybook/react/types-6-0";
import PointNotification from "..";

export default {
  title: "Common/PointNotification",
  component: PointNotification
} as Meta;

export const Default = () => <PointNotification>4</PointNotification>;
