import { useRouter } from "next/dist/client/router";
import React from "react";
import { StyledItemNavigation, StyledLinkButton, StyledNotificationPoint } from "./elements";
import Link, { LinkProps } from "next/link"
import DarkTooltip from "@fb-components/DarkTooltip";

type LinkButtonProps = {
  isSelected ?: boolean;
  notifications : number;
  title : string;
  icon: React.JSXElementConstructor<{size:number}>
} & LinkProps;

const LinkButton = ({ isSelected,title,notifications, icon: IconComponent, ...restProps } : LinkButtonProps) => {
  const { asPath } = useRouter();
  return (
    <StyledItemNavigation>
      <DarkTooltip text={title}>
      <Link {...restProps}>
        <StyledLinkButton isSelected={asPath === restProps.href}>
            {<IconComponent size={22} />}
            {(notifications > 0) && (
              <StyledNotificationPoint>{notifications}</StyledNotificationPoint>
              )}
        </StyledLinkButton>
      </Link>
      </DarkTooltip>
    </StyledItemNavigation>
  );
};

LinkButton.defaultProps = {
  notifications : 0
}

export default LinkButton;
