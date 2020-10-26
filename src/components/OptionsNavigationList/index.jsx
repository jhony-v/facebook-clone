import React from "react";
import { StyledNavigationListWrapper } from "./Atoms/elements";
import RowItem from "./Atoms/RowItem";
import items from "./items";
import faker from "faker"

const OptionsNavigationList = () => {
  return (
    <StyledNavigationListWrapper>
      <RowItem  text={faker.name.firstName() + " " + faker.name.lastName()} image={faker.image.avatar()} />
      {items.map((e, i) => (
        <RowItem
          key={i}
          text={e.title}
          image={require("../../assets/icons/" + e.image)}
        />
      ))}
    </StyledNavigationListWrapper>
  );
};

export default OptionsNavigationList;
