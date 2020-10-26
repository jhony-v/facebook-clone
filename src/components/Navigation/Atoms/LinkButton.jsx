import React from "react";
import { StyledItemNavigation, StyledLinkButton, StyledNotificationPoint } from "./elements";

const LinkButton = ({ isSelected, notifications, icon: IconComponent }) => {
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

export default LinkButton;
