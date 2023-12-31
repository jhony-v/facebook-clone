"use client";
import Wrapper from "@fb-components/common/Wrapper";
import ErrorHeaderMessage from "./components/ErrorHeaderMessage";
import TextLinkMessages from "./components/TextLinkMessages";
import LayoutDrawerAbsoluteFullScreen from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerAbsoluteFullScreen";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";

const Error4040View = () => (
  <ContainerMainNavigator>
    <LayoutDrawerAbsoluteFullScreen>
      <Wrapper m="auto" w="400px">
        <ErrorHeaderMessage />
        <TextLinkMessages />
      </Wrapper>
    </LayoutDrawerAbsoluteFullScreen>
  </ContainerMainNavigator>
);

export default Error4040View;
