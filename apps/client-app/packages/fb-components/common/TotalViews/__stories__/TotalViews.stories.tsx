import { Meta } from "@storybook/react/types-6-0";
import TotalViews from "..";

export default {
  title: "Common/TotalViews",
  component: TotalViews
} as Meta;

export const Default = () => <TotalViews total={230} />;
