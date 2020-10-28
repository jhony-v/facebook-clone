import React from "react";
import RowItem from "./Molecules/RowItem";
import ButtonOption from "./Atoms/ButtonOption";
import { StyledListContainer } from "./Atoms/elements";
import ListHeaderOptions from "./Molecules/ListHeaderOptions";
import ListRenderItems from "@fb-components/ListRenderItems";

const ContactList = ({ data, title, children, options, w,h }) => {
  return (
    <StyledListContainer w={w} h={h}>
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
