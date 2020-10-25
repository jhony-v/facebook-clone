import React from "react";
import RowItem from "../ChatTab/Molecules/RowItem";
import ListRenderItems from "../Common/ListRenderItems";
import ButtonOption from "./Atoms/ButtonOption";
import { StyledListContainer } from "./Atoms/elements";
import ListHeaderOptions from "./Molecules/ListHeaderOptions";

const ContactList = ({ data, title, children, options }) => {
  return (
    <StyledListContainer>
      <ListHeaderOptions title={title}>{options}</ListHeaderOptions>
      <ListRenderItems data={data} renderHeight={60} render={(item, options) => children(item, options)} />
    </StyledListContainer>
  );
};

ContactList.defaultProps = {
  data: [],
};

ContactList.ListItem = RowItem;
ContactList.Option = ButtonOption;

export default ContactList;
