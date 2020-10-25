import styled, { css } from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";

export const StyledNotificationPoint = styled.div`
  background-color: ${defaultTheme.colors.danger};
  color:white;
  padding: 5px 8px;
  border-radius: 15px;
  position:absolute;
  font-size:${defaultTheme.fontSizes.smallUltra};
  top:9%;
  left:70%;
  transform:translateX(-50%);
`;

export const StyledLinkButton = styled.button`
  background-color: ${defaultTheme.colors.primaryLayout};
  border-radius: 10px;
  padding: 5px 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline:none;
  margin:2px 10px;
  border-width:0;
  position:relative;
  ${props => props.isSelected && css`
    color:${defaultTheme.colors.primary};
    border-bottom:3px solid ${defaultTheme.colors.primary};
    border-radius:0;
    margin-bottom:0;
    padding-bottom:2px;
  `}

  ${props => !props.isSelected && css`
    color: ${defaultTheme.colors.primaryText};
    &:hover {
        background-color:${defaultTheme.colors.primaryLayoutLight};
    }
  `}
`;



export const StyledListItemsNavigation = styled.ul`
    display:inline-flex;
    padding:0;
    margin:0;
    list-style:none;
    height:${defaultTheme.height.header};
`
export const StyledItemNavigation = styled.li`
    display:flex;
`