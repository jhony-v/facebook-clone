import Wrapper from "@fb-components/Wrapper";
import React from "react";
import ScenePosts from "./ScenePosts/ScenePosts";

const PreviewStateOfNavigatorSelected = () => {
  return (
    <Wrapper className="profile__pagelet" m="20px auto">
      <ScenePosts />
    </Wrapper>
  );
};

export default PreviewStateOfNavigatorSelected;
