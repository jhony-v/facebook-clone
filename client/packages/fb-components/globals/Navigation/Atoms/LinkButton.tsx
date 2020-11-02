import { useRouter } from "next/dist/client/router";
import React from "react";
import { StyledItemNavigation, StyledLinkButton, StyledNotificationPoint } from "./elements";
import Link, { LinkProps } from "next/link"

type LinkButtonProps = {
  isSelected ?: boolean;
  notifications : number;
  icon: React.JSXElementConstructor<{size:number}>
} & LinkProps;
const LinkButton = ({ isSelected, notifications, icon: IconComponent, ...restProps } : LinkButtonProps) => {
  const { pathname } = useRouter();
  return (
    <StyledItemNavigation>
      <Link {...restProps}>
        <StyledLinkButton isSelected={pathname === restProps.href}>
          {<IconComponent size={22} />}
          {(notifications > 0) && (
            <StyledNotificationPoint>{notifications}</StyledNotificationPoint>
            )}
        </StyledLinkButton>
      </Link>
    </StyledItemNavigation>
  );
};

LinkButton.defaultProps = {
  notifications : 0
}

export default LinkButton;
