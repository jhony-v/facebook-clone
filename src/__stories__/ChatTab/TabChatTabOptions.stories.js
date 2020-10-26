import React from "react";
<<<<<<< HEAD:src/__stories__/ChatTabTabOptions.stories.js
import TabOptions from "../components/ChatTab/ChatTabMolecules/TabOptions";

export default {
  title: "ChatTab/Components/TabChatTabOptions",
=======
import TabOptions from "../../components/ChatTab/Molecules/TabOptions";

export default {
  title: "ChatTab/Components/TabOptions",
>>>>>>> dev:src/__stories__/ChatTab/TabChatTabOptions.stories.js
  component: TabOptions,
  args: {
    optionId : "friends",
    text: "Friends"  
  }
};

const styleDecoratorContainer = {
  display: "flex",
  width: "300px",
  margin: "auto",
};

const Template = args => {
  return(
    <div style={styleDecoratorContainer}><TabOptions.Option {...args} /></div>
  )
}

export const Default = Template.bind({});
Default.args = {}

export const Selected = Template.bind({});
Selected.args = {
  selected: true
}

export const Items = () => {
  return(
    <TabOptions initialId="friends">
      <TabOptions.Option optionId="friends" text="Friends" />
      <TabOptions.Option optionId="online" text="Online"/>
      <TabOptions.Option optionId="contacts" text="Contacts"/>
    </TabOptions>
  )
}
