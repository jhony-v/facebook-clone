import React from "react";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import RaisedButton from "@fb-components/common/RaisedButton";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { IoIosArrowForward } from "react-icons/io";
import { FCWithChildren } from "@utils/types";
import { RoundButtonIcon } from "./elements";

type ItemButtonSelectableProps = {
  onClick: () => void;
  icon?: React.JSXElementConstructor<{ size: string }>;
  hideNextArrow?: boolean;
};

const ItemButtonSelectable: FCWithChildren<ItemButtonSelectableProps> = ({
  icon: IconComponent,
  onClick,
  children,
  hideNextArrow
}) => (
  <Wrapper m="10px 0">
    <RaisedButton hover fluid onClick={onClick}>
      <FlexWrapper align="center" w="100%">
        {IconComponent && (
          <RoundButtonIcon>
            <IconComponent size="20px" />
          </RoundButtonIcon>
        )}
        <Wrapper m="0 auto 0 10px">
          <TextLabel weight textColor="vgTextBlackAlpha30" textAlign="left">
            {children}
          </TextLabel>
        </Wrapper>
        {!hideNextArrow && <IoIosArrowForward size="22px" />}
      </FlexWrapper>
    </RaisedButton>
  </Wrapper>
);

export default ItemButtonSelectable;
