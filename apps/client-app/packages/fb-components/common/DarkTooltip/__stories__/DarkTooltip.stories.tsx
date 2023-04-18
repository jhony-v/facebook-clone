import { Meta } from "@storybook/react/types-6-0";
import DarkTooltip from "..";

export default {
  title: "Common/DarkTooltip",
  component: DarkTooltip
} as Meta;

export const Default = () => (
  <div>
    <DarkTooltip text="tooltip">
      <h1>text with tooltip</h1>
    </DarkTooltip>
  </div>
);
