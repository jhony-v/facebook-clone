import React from "react";
import Avatar from "../../components/Common/Avatar";
import RowItemSelectable from "../../components/Common/RowItemSelectable";
import faker from "faker";

export default {
  title: "Components/RowItemSelectable",
  component: RowItemSelectable,
};

export const Default = () => {
  return (
    <RowItemSelectable
      image={<Avatar src={faker.image.nature()} />}
      text="Jhony Vega cuya"
    />
  );
};
