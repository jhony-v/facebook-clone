import React from "react";
import CreateNewPost from "../components/CreateNewPost";
import faker from "faker";

const CreateNewPostExample = () => {
  return (
    <CreateNewPost
      userImage={faker.image.avatar()}
      inputPlaceholder="Escribir nueva publicación"
    ></CreateNewPost>
  );
};

export default CreateNewPostExample;
