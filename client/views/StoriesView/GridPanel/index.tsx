import React from "react";
import Wrapper from "@fb-components/common/Wrapper";
import styled from "styled-components";

const DrawerFullScreen = styled.div`
  display: grid;
  grid-template-columns: 360px 1fr;
  height: 100vh;
  ${Wrapper} {
    display: flex;
    flex-direction: column;
  }
`;

const SidebarWrapperHeader = styled.div`
    width:100%;
    height:${props => props.theme.layoutSizes.heightNavigator};
    border-bottom:1px solid ${props => props.theme.colors.vgBlackAlpha12};
    flex:none;
`

const SidebarWrapperScrollable = styled.div`
    height:100%;
    overflow-y:scroll;
`

const SidebarContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:${props => props.theme.colors.vgBlackAlpha00};
    height:100vh;
`

const MainContainer = styled.div`
    background-color:rgba(0,0,0,.9);
`

type GridPanelProps = {
  sidebar?: React.ReactNode;
  main?: React.ReactNode;
};
const GridPanel = ({ sidebar, main }: GridPanelProps) => {
  return (
    <DrawerFullScreen>
      <SidebarContainer>
          <SidebarWrapperHeader/>
          <SidebarWrapperScrollable>
              {sidebar}
          </SidebarWrapperScrollable>
      </SidebarContainer>
      <MainContainer>{main}</MainContainer>
    </DrawerFullScreen>
  );
};

export default GridPanel;
