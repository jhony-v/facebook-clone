import { useAtom } from "jotai";
import { currentContentNavigationAtom } from "../../stores/mainNavigation.store";
import BaseText from "../../ui/BaseText";
import AppSidebarContainer from "../../ui/layouts/AppSidebarContainer";
import {
  SidebarWrapperContent,
  SidebarWrapperHeader,
} from "./components/SidebarWrapper";
import { Scrollbars } from "react-custom-scrollbars";

const SidebarNavigation = () => {
  const [state] = useAtom(currentContentNavigationAtom);
  return (
    <AppSidebarContainer>
      <SidebarWrapperHeader>
        <BaseText as="h1" size="large">
          {state?.text}
        </BaseText>
      </SidebarWrapperHeader>
      <SidebarWrapperContent>
        <Scrollbars autoHeight autoHide autoHeightMin="100%" autoHeightMax="100%">
        </Scrollbars>
      </SidebarWrapperContent>
    </AppSidebarContainer>
  );
};

export default SidebarNavigation;
