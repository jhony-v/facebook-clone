import React from "react";
import faker from "faker";
import CreateNewPost from "@fb-components/CreateNewPost";

const CreateNewPostExample = () => {
  return (
    <CreateNewPost
      userImage={faker.image.avatar()}
      inputPlaceholder="Escribir nueva publicación"
    ></CreateNewPost>
  );
};

export default CreateNewPostExample;
