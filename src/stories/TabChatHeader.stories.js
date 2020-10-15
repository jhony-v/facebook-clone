import React from "react";
import TabHeader from "../components/TabChat/TabChatComponents/TabHeader";

export default {
  title: "TabChat/Components/TabChatHeader",
  component: TabHeader,
};

const Template = (args) => <TabHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleHeader : "New Message"
}