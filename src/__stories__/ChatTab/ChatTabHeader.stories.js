import React from "react";
import TabHeader from "../../components/ChatTab/Atoms/TabHeader";

export default {
  title: "Components/ChatTab/TabChatHeader",
  component: TabHeader,
};

const Template = (args) => <TabHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleHeader : "New Message"
}