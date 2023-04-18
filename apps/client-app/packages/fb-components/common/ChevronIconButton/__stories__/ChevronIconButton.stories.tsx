import { GetStoryProps } from "@utils/transforms";
import { Meta } from "@storybook/react/types-6-0";
import ChevronIconButton from "..";

export default {
  title: "Common/ChevronIconButton",
  component: ChevronIconButton
} as Meta;

const Template: GetStoryProps<typeof ChevronIconButton> = (props) => (
  <ChevronIconButton {...props} />
);

export const Left = Template.bind({});
Left.args = {
  direction: "left"
};

export const Right = Template.bind({});
Right.args = {
  direction: "right"
};
