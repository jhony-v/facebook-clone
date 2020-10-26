import React from "react";
import PropTypes from "prop-types";
import TextLabel from "../Common/TextLabel";
import Wrapper from "../Common/Wrapper";
import styled from "styled-components";
import FlexWrapper from "../Common/FlexWrapper";

export const StyledRowItemSelectable = styled(FlexWrapper)`
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const RowItemSelectable = ({ image, text, children, ...restProps }) => {
  return (
    <StyledRowItemSelectable {...restProps}>
      <Wrapper m="0 10px 0 0">{image}</Wrapper>
      {text ? (
        <TextLabel weight textSize=".9rem">
          {text}
        </TextLabel>
      ) : (
        <Wrapper>{children}</Wrapper>
      )}
    </StyledRowItemSelectable>
  );
};

RowItemSelectable.propTypes = {
  image: PropTypes.node,
  text: PropTypes.string,
  children: PropTypes.node,
};

export default RowItemSelectable;
