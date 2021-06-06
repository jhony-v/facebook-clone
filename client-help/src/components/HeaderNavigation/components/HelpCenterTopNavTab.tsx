import { useSelect } from "downshift";
import { FC } from "react";
import { HeaderTabsOptionDataItemType } from "../../../data/header.data";
import { styled } from "../../../lib/stitches.config";
import { CurrentNavigationOption } from "../../../stores/mainNavigation.store";
import PressableItemOption from "../../../ui/PressableItemOption";
import PressableOverlay from "../../../ui/PressableOverlay";
import TetraText from "../../../ui/TetraText";

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "stretch",
  position: "relative",
  "@max3" : {
    padding : 10,
    boxSizing : "border-box",
    flexDirection : "column"
  }
});

const WrapperSelectMenuOptions = styled("div", {
  background: "$bg100",
  boxSizing: "border-box",
  boxShadow: "0 10px 20px rgba(0,0,0,.2)",
  borderRadius: 10,
  padding: 5,
  "@min3" : {
    width: 300,
    left: 0,
    zIndex: 50,
    position: "absolute",
    top: "calc($from-header - 5px)",
  }
});


type HelpCenterTopNavTabProps = {
  item: HeaderTabsOptionDataItemType;
  onSelectOption?: (option: CurrentNavigationOption) => void;
};

const HelpCenterTopNavTab: FC<HelpCenterTopNavTabProps> = ({
  item,
  onSelectOption,
}) => {
  const { text, options } = item;
  const {
    getToggleButtonProps,
    getItemProps,
    getMenuProps,
    isOpen,
    highlightedIndex,
    closeMenu,
  } = useSelect({
    items: options,
  });

  const onSelectMenuOptions = (
    option: HeaderTabsOptionDataItemType["options"][0]
  ) => {
    closeMenu();
    onSelectOption &&
      onSelectOption({
        id: item.id,
        option: {
          id: option.id,
        },
      });
  };

  return (
    <Wrapper>
      <PressableOverlay 
        hoverable
        hovered={isOpen} 
        {...getToggleButtonProps()} 
        css={{
          "@max3" : {
            width : "100%"
          }
        }}
      >
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
                onClick={() => onSelectMenuOptions(currentItem)}
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
