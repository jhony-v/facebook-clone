import { Meta } from "@storybook/react/types-6-0";
import RowDivider from "..";

export default {
  title: "Common/RowDivider",
  component: RowDivider
} as Meta;

export const Default = () => (
  <RowDivider>Hello world from RowDivider</RowDivider>
);
