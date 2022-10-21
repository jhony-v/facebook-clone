import React from "react";
import styled from "styled-components";
import { FiMoreHorizontal } from "react-icons/fi";
import Avatar from "../Avatar";
import FlexWrapper from "../FlexWrapper";

const ItemAvatar = styled(Avatar)`
  border: 2px solid white;
`;

const defaultDimension = 40;
type Dimension = {
  w?: number;
  h?: number;
};
const ItemWrapperAvatar = styled.div<Dimension>`
  position: relative;
  width: ${(props) => (props.w || defaultDimension) - 10}px;
  height: ${(props) => props.h || defaultDimension}px;
  :last-of-type {
    ${ItemAvatar} {
      border: none;
    }
  }
`;

const PlaceholderButton = styled.div<Dimension>`
  width: ${(props) => props.w || defaultDimension}px;
  height: ${(props) => props.h || defaultDimension}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
`;

type ButtonProps = {
  onClick?: () => void;
} & Dimension;

const PlaceholderButtonMoreAvatar = ({ onClick, w, h }: ButtonProps) => (
  <PlaceholderButton w={w} h={h} onClick={onClick}>
    <FiMoreHorizontal color="white" size="20px" />
  </PlaceholderButton>
);

type StringAvatarsProps = {
  images: string[];
  onClickPlaceholder?: () => void;
  placeholder?: boolean;
  dimension?: number;
};
const StringAvatars = (props: StringAvatarsProps) => {
  const { images, placeholder, dimension } = props;
  const len = images.length;

  return (
    <FlexWrapper>
      {images.map((image, i) => (
        <ItemWrapperAvatar key={i} w={dimension} h={dimension}>
          <ItemAvatar src={image} dimension={`${dimension}px`} />
          {placeholder && i + 1 === len && (
            <PlaceholderButtonMoreAvatar
              w={dimension}
              h={dimension}
              onClick={props.onClickPlaceholder}
            />
          )}
        </ItemWrapperAvatar>
      ))}
    </FlexWrapper>
  );
};

StringAvatars.defaultProps = {
  dimension: 40
};

export default StringAvatars;
