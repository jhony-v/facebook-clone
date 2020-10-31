import styled, { css } from "styled-components";

export const StyledNotificationPoint = styled.div`
  background-color: ${props => props.theme.colors.vgDanger};
  color:white;
  padding: 5px 8px;
  border-radius: 15px;
  position:absolute;
  font-size:${({theme}) => theme.fontSizes[100]};
  top:9%;
  left:70%;
  transform:translateX(-50%);
`;

type StyledLinkButtonTypes = {
  isSelected ?: boolean;
}
export const StyledLinkButton = styled.button<StyledLinkButtonTypes>`
  background-color: ${({theme}) => theme.colors.vgBlackAlpha00};
  border-radius: 10px;
  padding: 5px 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline:none;
  margin:2px 10px;
  border-width:0;
  position:relative;
  ${({theme,isSelected}) => isSelected && css`
    color:${theme.colors.vgPrimary};
    border-bottom:3px solid currentColor;
    border-radius:0;
    margin-bottom:0;
    padding-bottom:2px;
  `}

  ${({theme,isSelected}) => !isSelected && css`
    color: ${theme.colors.vgBlackAlpha40};
    &:hover {
        background-color:${theme.colors.vgBlackAlpha10};
    }
  `}
`;

export const StyledListItemsNavigation = styled.ul`
    display:inline-flex;
    padding:0;
    margin:0;
    list-style:none;
    height:${props => props.theme.layoutSizes.heightNavigator};
`
export const StyledItemNavigation = styled.li`
    display:flex;
`