import React from "react";
import RowItem from "./Molecules/RowItem";
import ButtonOption from "./Atoms/ButtonOption";
import { StyledListContainer } from "./Atoms/elements";
import ListHeaderOptions from "./Molecules/ListHeaderOptions";
import ListRenderItems from "@fb-components/common/ListRenderItems";

type ContactListProps = {
  data: any[];
  title: string;
  children: ( item : any, options : any ) => React.ReactNode;
  options: React.ReactNode;
  sizes ?: {
    w ?: string;
    h ?: string;
  }
}
const ContactList = ({ data, title, children, options, sizes }: ContactListProps) => {
  return (
    <StyledListContainer w={sizes?.w} h={sizes?.h}>
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
