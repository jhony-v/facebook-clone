import { Meta } from "@storybook/react/types-6-0";
import TabOptions from "..";

export default {
  title: "Globals/TabOptions",
  component: TabOptions
} as Meta;

export const Default = () => (
  <TabOptions
    initialId="a"
    onSelectedOption={(e) => {
      console.log(e);
    }}
  >
    <>
      <TabOptions.Option optionId="a" text="Item a" />
      <TabOptions.Option optionId="b" text="Item b" />
      <TabOptions.Option optionId="c" text="Item c" />
    </>
  </TabOptions>
);
