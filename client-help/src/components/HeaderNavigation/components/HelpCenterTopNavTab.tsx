import { useSelect } from "downshift";
import { FC } from "react";
import { HeaderTabsOptionDataItemType } from "../../../data/header.data";
import { styled } from "../../../lib/stitches.config";
import PressableItemOption from "../../../ui/PressableItemOption";
import PressableOverlay from "../../../ui/PressableOverlay";
import TetraText from "../../../ui/TetraText";

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "stretch",
  position: "relative",
});

const WrapperSelectMenuOptions = styled("div", {
  position: "absolute",
  left: 0,
  background: "$bg100",
  padding: "5px",
  boxSizing : "border-box",
  width: "300px",
  zIndex: 50,
  top: "$from-header",
  boxShadow: "0 10px 20px rgba(0,0,0,.2)",
  borderRadius: "10px",
});

type HelpCenterTopNavTabProps = {
  item: HeaderTabsOptionDataItemType;
};
const HelpCenterTopNavTab: FC<HelpCenterTopNavTabProps> = ({ item }) => {
  const { text, options } = item;
  const {
    getToggleButtonProps,
    getItemProps,
    getMenuProps,
    isOpen,
    highlightedIndex,
  } = useSelect({
    items: options,
  });

  return (
    <Wrapper>
      <PressableOverlay hoverable {...getToggleButtonProps()}>
        <TetraText color="secondary">{text}</TetraText>
      </PressableOverlay>
      <div {...getMenuProps()}>
        {isOpen && (
          <WrapperSelectMenuOptions>
            {options.map((currentItem, index) => (
              <PressableItemOption
                key={index}
                icon={currentItem.icon}
                pressableButton={{
                  ...getItemProps({ item: currentItem, index }),
                  hovered: highlightedIndex === index,
                  hoverable: true,
                }}
              >
                {currentItem.text}
              </PressableItemOption>
            ))}
          </WrapperSelectMenuOptions>
        )}
      </div>
    </Wrapper>
  );
};

export default HelpCenterTopNavTab;
