import React from "react";
import {HeaderWrapper} from "./Atoms/elements";


type HeaderNavigationProps = {
   children: React.ReactNode;
};
const HeaderNavigation = ({children}: HeaderNavigationProps) => (
   <HeaderWrapper>{children}</HeaderWrapper>
);

export default HeaderNavigation;
