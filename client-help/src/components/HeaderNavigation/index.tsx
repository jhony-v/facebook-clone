import { useAtom } from "jotai";
import React from "react";
import { styled } from "../../lib/stitches.config";
import { headerTabsAtom } from "../../stores/useNavigation.store";
import AppHeaderContainer from "../../ui/AppHeaderContainer";
import BaseButton from "../../ui/BaseButton";
import PressableOverlay from "../../ui/PressableOverlay";
import TetraText from "../../ui/TetraText";

const LayoutHeaderNavigation = styled(AppHeaderContainer, {
  padding: "5px 10px",
  justifyContent: "space-between",
});

const WrapperOptions = styled("div", {
  display: "flex",
  height : "100%",
});

const HeaderNavigation = () => {
  const [state] = useAtom(headerTabsAtom);
  return (
    <LayoutHeaderNavigation>
      <TetraText>Help Center</TetraText>
      <WrapperOptions>
        {state.map(({ id, text }) => (
          <PressableOverlay key={id} hoverable>
            <TetraText color="secondary">{text}</TetraText>
          </PressableOverlay>
        ))}
      </WrapperOptions>
      <WrapperOptions>
        <BaseButton variant="secondary">English(US)</BaseButton>
      </WrapperOptions>
    </LayoutHeaderNavigation>
  );
};

export default HeaderNavigation;
