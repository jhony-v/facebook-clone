import { useAtom } from "jotai";
import { currentContentNavigationAtom } from "../../stores/mainNavigation.store";
import BaseText from "../../ui/BaseText";
import AppSidebarContainer from "../../ui/layouts/AppSidebarContainer";
import {
  SidebarWrapperContent,
  SidebarWrapperHeader,
} from "./components/SidebarWrapper";
import { Scrollbars } from "react-custom-scrollbars";
import PressableItemOption from "../../ui/PressableItemOption";
import { navigate, useParams } from "@reach/router";
import { css } from "../../lib/stitches.config";



const pressableitemOptionStyle = css({
  mx : "10px",
})

const SidebarNavigation = () => {
  const [state] = useAtom(currentContentNavigationAtom);
  const params = useParams();

  return (
    <AppSidebarContainer>
      <SidebarWrapperHeader>
        <BaseText as="h1" size="large">
          {state?.text}
        </BaseText>
      </SidebarWrapperHeader>
      <SidebarWrapperContent>
        <Scrollbars
          autoHeight
          autoHide
          autoHeightMin="100%"
          autoHeightMax="100%"
        >
          {state?.options.map((currentOption) => (
            <PressableItemOption
              key={currentOption.id}
              icon={currentOption.icon}
              onClick={() => navigate(currentOption.id)}
              pressableButton={{
                hoverable: true,
                pressed: params.helpId === currentOption.id,
                className:pressableitemOptionStyle(),
                spacing : "medium"
              }}
            >
              {currentOption.text}
            </PressableItemOption>
          ))}
        </Scrollbars>
      </SidebarWrapperContent>
    </AppSidebarContainer>
  );
};

export default SidebarNavigation;
