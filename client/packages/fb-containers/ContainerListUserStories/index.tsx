import Wrapper from "@fb-components/common/Wrapper";
import React from "react";
import AddNewPublicStory from "./AddNewPublicStory";
import ListUSersWithStories from "./ListUsersWithStories";

const ContainerListUserStories = () => {
  return (
    <Wrapper>
      <AddNewPublicStory />
      <ListUSersWithStories/>
    </Wrapper>
  );
};

export default ContainerListUserStories;
