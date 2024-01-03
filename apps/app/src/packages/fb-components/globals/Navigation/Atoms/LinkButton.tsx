import React from "react";
import { usePathname } from "next/navigation";
import { LinkProps } from "next/link";
import DarkTooltip from "@fb-components/common/DarkTooltip";
import {
  StyledItemNavigation,
  StyledLink,
  StyledLinkButton,
  StyledPointNotification
} from "./elements";

type LinkButtonProps = {
  isSelected?: boolean;
  notifications?: number;
  title: string;
  icon: React.JSXElementConstructor<{ size: number }>;
} & LinkProps;

const LinkButton = ({
  isSelected,
  title,
  notifications = 0,
  icon: IconComponent,
  ...restProps
}: LinkButtonProps) => {
  const asPath = usePathname();
  return (
    <StyledItemNavigation>
      <DarkTooltip text={title}>
        <StyledLink {...restProps}>
          <StyledLinkButton $isSelected={asPath === restProps.href}>
            <IconComponent size={22} />
            {notifications > 0 && (
              <StyledPointNotification>{notifications}</StyledPointNotification>
            )}
          </StyledLinkButton>
        </StyledLink>
      </DarkTooltip>
    </StyledItemNavigation>
  );
};

export default LinkButton;
