import React from "react";
import { FaFileVideo } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import { MdTagFaces } from "react-icons/md";
import ActionButtonsController from "../ActionButtonsController";
import ActionInputController from "./Atoms/ActionInputController";
import { StyledCreatePostWrapper } from "./Atoms/elements";

type CreateNewPostProps = {
  userImage: string;
  inputPlaceholder: string;
  onClick?: () => void;
};
const CreateNewPost = ({
  userImage,
  inputPlaceholder,
  onClick
}: CreateNewPostProps) => (
  <StyledCreatePostWrapper>
    <ActionInputController
      userImage={userImage}
      inputPlaceholder={inputPlaceholder}
      onClick={onClick}
    />
    <ActionButtonsController repeatColumns={3}>
      <ActionButtonsController.Button
        text="Live video"
        icon={FaFileVideo}
        colorIcon="red"
      />
      <ActionButtonsController.Button
        text="Photo/Video"
        icon={FiImage}
        colorIcon="green"
      />
      <ActionButtonsController.Button
        text="Feeling/Activity"
        icon={MdTagFaces}
        colorIcon="orange"
      />
    </ActionButtonsController>
  </StyledCreatePostWrapper>
);

export default CreateNewPost;
