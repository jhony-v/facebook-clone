import React from "react";
<<<<<<< HEAD:src/__stories__/ChatTabList.stories.js
import { RenderList  } from "../components/ChatTab/ChatTabPieces";
import RowItem from "../components/ChatTab/ChatTabMolecules/RowItem";
=======
import ListRenderItems from "../../components/Common/ListRenderItems";
import RowItem from "../../components/ChatTab/Molecules/RowItem";
>>>>>>> dev:src/__stories__/ChatTab/TabChatList.stories.js

export default {
  title: "ChatTab/Components/ListRowItem",
  component: RowItem,
};

const Template = (args) => <RowItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  image:
    "https://cdn.pixabay.com/photo/2020/10/10/14/31/windmills-5643293__340.jpg",
  text: "Juan Mateo Stive",
};

const data = Array(10).fill(Default.args);

export const List = () => {
  return (
    <div style={{ height: "300px" }}>
<<<<<<< HEAD:src/__stories__/ChatTabList.stories.js
=======
      <ListRenderItems data={data} render={(item, index) => <RowItem {...item} key={index} />} />
>>>>>>> dev:src/__stories__/ChatTab/TabChatList.stories.js
    </div>
  );
};
