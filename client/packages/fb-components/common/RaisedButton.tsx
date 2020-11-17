import { GetComponentProps } from "@utils/transforms";
import React from "react";
import styled, { css } from "styled-components";

type StyledRaisedWrapperTypes = {
  variant ?: "primary";
  w ?: string;
  fluid ?: boolean;
  hover ?: boolean;
}
const StyledRaisedWrapper = styled.button<StyledRaisedWrapperTypes>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  border-radius: 10px;
  outline:none;
  border-width:0;
  background:none;
  transition: background-color .3s;
  cursor:pointer;
  width:${props => props.fluid ? "100%"  : (props.w || "auto")};
  ${props=>props.variant === "primary" && css`
    background-color:${props.theme.colors.vgPrimary};
    color: ${props.theme.colors.vgTextBlackAlpha00};
    &:hover {
    background-color: ${props => props.theme.colors.vgPrimaryAlpha10};
  }
  `}
  ${props => props.hover && css`
    &:hover {
      background-color: ${props => props.theme.colors.vgBlackAlpha10};
    }
  `}
`;


export type RaisedButtonProps = {
  children ?: React.ReactNode;
} & React.ButtonHTMLAttributes<{}> 
  & GetComponentProps<typeof StyledRaisedWrapper> 
  & StyledRaisedWrapperTypes

const RaisedButton = ({ children, ...restProps } : RaisedButtonProps) => {
  return <StyledRaisedWrapper {...restProps}>{children}</StyledRaisedWrapper>;
};

export default RaisedButton;
