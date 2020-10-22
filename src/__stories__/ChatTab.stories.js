import React from "react";
import ChatTab from "../components/ChatTab";
import faker from "faker";

export default {
  title: "ChatTab",
};

const testData = Array(20)
  .fill(0)
  .map((e, i) => ({
    title: faker.name.findName(),
    image: faker.image.people(),
  }));

export const Default = () => {
  return <ChatTab></ChatTab>;
};
