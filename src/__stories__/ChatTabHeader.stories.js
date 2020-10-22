import React from "react";
import TabHeader from "../components/ChatTab/ChatTabAtoms/TabHeader";

export default {
  title: "ChatTab/Components/TabChatHeader",
  component: TabHeader,
};

const Template = (args) => <TabHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleHeader : "New Message"
}