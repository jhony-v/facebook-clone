import React from "react";
import { FaFileVideo } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import { MdTagFaces } from "react-icons/md";
import Grid from "../Common/Grid";
import ActionButtonController from "./Atoms/ActionButtonController";
import ActionInputController from "./Atoms/ActionInputController";
import { StyledCreatePostWrapper } from "./Atoms/elements";

const CreateNewPost = ({ userImage, inputPlaceholder }) => {
  return (
    <StyledCreatePostWrapper>
       <ActionInputController userImage={userImage} inputPlaceholder={inputPlaceholder} /> 
      <Grid gap="10px" repeatColumns={3}>
        <ActionButtonController text="Live video" icon={FaFileVideo} colorIcon="red" />
        <ActionButtonController text="Photo/Video" icon={FiImage} colorIcon="green" />
        <ActionButtonController text="Feeling/Activity" icon={MdTagFaces} colorIcon="orange" />
      </Grid>
    </StyledCreatePostWrapper>
  );
};

export default CreateNewPost;
