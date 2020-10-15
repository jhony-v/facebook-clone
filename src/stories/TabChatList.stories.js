import React from "react";
import ViewerListRowItems from "../components/TabChat/TabChatViewer/ViewerListRowItems";
import RowItem from "../components/TabChat/TabChatViewer/RowItem";

export default {
  title: "TabChat/Components/ListRowItem",
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
      <ViewerListRowItems data={data} render={(item, index) => <RowItem {...item} key={index} />} />
    </div>
  );
};
