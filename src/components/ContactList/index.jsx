import React from "react";
import RowItem from "../ChatTab/ChatTabMolecules/RowItem";
import ListRenderItems from "../Common/ListRenderItems";
import ButtonOption from "./ContactListAtoms/ButtonOption";
import { StyledListContainer } from "./ContactListAtoms/elements";
import ListHeaderOptions from "./ContactListMolecules/ListHeaderOptions";

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
