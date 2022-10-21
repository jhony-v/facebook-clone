import { Meta } from "@storybook/react/types-6-0";
import WriteNewPostModal from "..";

export default {
  title: "Globals/WriteNewPostModal",
  component: WriteNewPostModal
} as Meta;

export const Default = () => (
  <WriteNewPostModal actions={{ open: true, onClose: () => null }} />
);
