import React from "react";
<<<<<<< HEAD:src/__stories__/ChatTabHeader.stories.js
import TabHeader from "../components/ChatTab/ChatTabAtoms/TabHeader";

export default {
  title: "ChatTab/Components/TabChatHeader",
=======
import TabHeader from "../../components/ChatTab/Atoms/TabHeader"

export default {
  title: "ChatTab/Components/Header",
>>>>>>> fa9e50b6836a4a3470c568caf5ad4bf25f9af15f:src/__stories__/ChatTab/TabChatHeader.stories.js
  component: TabHeader,
};

const Template = (args) => <TabHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleHeader : "New Message"
}