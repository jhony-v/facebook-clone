import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FlexWrapper from "./FlexWrapper";
import { FiMoreHorizontal } from "react-icons/fi";

const ItemAvatar = styled(Avatar)`
  border: 2px solid white;
`;

const ItemWrapperAvatar = styled.div`
  position: relative;
  width: 30px;
  height: 40px;
  :last-of-type {
    ${ItemAvatar} {
      border: none;
    }
  }
`;

const PlaceholderButton = styled(FlexWrapper)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
`;

const PlaceholderButtonMoreAvatar = ({onClick}:{onClick?:()=>void}) => {
  return (
    <PlaceholderButton onClick={onClick}>
      <FiMoreHorizontal color="white" size="20px" />
    </PlaceholderButton>
  );
};

type StringAvatarsProps = {
  images: string[];
  onClickPlaceholder?: () => void;
  placeholder ?: boolean;
};
const StringAvatars = (props: StringAvatarsProps) => {
  const { images, placeholder } = props;  
  const len = images.length;

  return (
    <FlexWrapper>
      {images.map((image, i) => (
        <ItemWrapperAvatar>
          <ItemAvatar src={image} />
          {placeholder && (
            i + 1 === len && <PlaceholderButtonMoreAvatar onClick={props.onClickPlaceholder} />
          )}
        </ItemWrapperAvatar>
      ))}
    </FlexWrapper>
  );
};

export default StringAvatars;
