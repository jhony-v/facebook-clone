import React from "react";
import { StyledItemNavigation, StyledLinkButton, StyledNotificationPoint } from "./elements";

type LinkButtonProps = {
  isSelected ?: boolean;
  notifications : number;
  icon: React.JSXElementConstructor<{size:number}>
}
const LinkButton = ({ isSelected, notifications, icon: IconComponent } : LinkButtonProps) => {
  return (
    <StyledItemNavigation>
      <StyledLinkButton isSelected={isSelected}>
        {<IconComponent size={22} />}
        {(notifications > 0) && (
            <StyledNotificationPoint>{notifications}</StyledNotificationPoint>
        )}
      </StyledLinkButton>
    </StyledItemNavigation>
  );
};

LinkButton.defaultProps = {
  notifications : 0
}

export default LinkButton;
