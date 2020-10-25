import React from "react";
import TabHeader from "../../components/ChatTab/Atoms/TabHeader"

export default {
  title: "ChatTab/Components/Header",
  component: TabHeader,
};

const Template = (args) => <TabHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleHeader : "New Message"
}