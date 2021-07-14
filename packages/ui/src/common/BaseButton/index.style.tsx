import styled, { css } from "styled-components";


export interface BaseButtonStyleProps {
    variant : "primary" | "secondary",
    size : "sm" | "md" | "lg"
}

export const BaseButtonStyle = styled.button<BaseButtonStyleProps>`
    height:36px;
    padding:1px 12px;
    box-sizing:border-box;
    display:flex;
    align-items: center;
    justify-content: center;
    outline:none;
    border:none;
    cursor: pointer;
    font-weight: bold;
    transition: background-color .2s;
    border-radius:var(--fb-corner-radius-06);

    ${props => props.size === "sm" && css`
      height:25px;
      padding:1px 5px;
    `}

    ${props => props.size === "md" && css`
      height:36px;
      padding:1px 12px;
    `}

    ${props => props.size === "lg" && css`
      height:44px;
      padding:2px 18px;    
    `}

    ${props => props.variant === "primary" && css`
        background-color: var(--fb-primary);
        color:var(--fb-white);
        &:hover {
          background-color: var(--fb-primary-dark-10);
        }
        &:disabled{
          background-color: var(--fb-primary-button-disabled);   
          cursor:default;
        }
    `}

    ${props => props.variant === "secondary" && css`
      background-color: var(--fb-secondary-button-background);
      color:var(--fb-secondary-button-text);
      &:hover {
        background-color: var(--fb-secondary-button-background-hovered);
      }
      &:disabled{
         background-color: var(--fb-secondary-button-disabled);
         color:var(--fb-gray-30);     
         cursor:default;
      }
    `}
`