import { Meta } from "@storybook/react/types-6-0";
import HeaderNavigation from "..";

export default {
  title: "Layouts/HeaderNavigation",
  component: HeaderNavigation
} as Meta;

export const Default = () => (
  <HeaderNavigation>
    <p>Header navigation</p>
  </HeaderNavigation>
);
