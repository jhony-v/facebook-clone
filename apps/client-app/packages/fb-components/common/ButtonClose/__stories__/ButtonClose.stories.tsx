import { Meta } from "@storybook/react/types-6-0";
import ButtonClose from "..";

export default {
  title: "Common/ButtonClose",
  component: ButtonClose
} as Meta;

export const Default = () => <ButtonClose onClose={() => null} />;
