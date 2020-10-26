import React from "react";
import CreateNewPost from "../../components/CreateNewPost";
import faker from "faker";

export default {
  title: "Components/CreateNewPost",
  component: CreateNewPost,
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", width: "600px", margin: "auto" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return (
    <CreateNewPost
      userImage={faker.image.avatar()}
      inputPlaceholder="Escribir nueva publicación"
    ></CreateNewPost>
  );
};
