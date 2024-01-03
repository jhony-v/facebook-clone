import { styled } from "../../../../lib/stitches.config";
import BaseButtonAvatarAction from "../../../../ui/BaseButtonAvatarAction";
import ListHelpCenterTopNavTab from "../ListHelpCenterTopNavTab";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import CloseActionIcon from "../../../../ui/CloseActionIcon";
import TetraText from "../../../../ui/TetraText";
import Facebook from "../../../../ui/Facebook";

const WrapperNavigationListHelpNavOptions = styled("div", {
  display : "flex",
  height: "100%",
  "@max3": {
    display : "block",
    background: "$bg100",
    height: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    overflowY : "auto"
  },
  variants : {
    open : {
      true : {
        "@max3" : {
          visibility : "visible"
        }
      },
      false : {
        "@max3" : {
          visibility : "hidden"
        }
      }
    },
  }
});

const MenuButtonMobileWrapper = styled("span", {
  display: "inline",
  "@min3": {
    display: "none",
  },
});

const HeaderNavWrapperTitle = styled("div", {
  display : "flex",
  alignItems : "center",
})

const HeaderNavWrapper = styled("div", {
  display : "flex",
  alignItems : "center",
  justifyContent : "space-between",
  padding : 20,
  [`& ${HeaderNavWrapperTitle} ${TetraText}`] : {
    marginLeft : 10
  }
})

const HelpCenterTopNavTabTopics = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <WrapperNavigationListHelpNavOptions open={open}>
        <MenuButtonMobileWrapper>
          <HeaderNavWrapper>
            <HeaderNavWrapperTitle>
              <Facebook/>
              <TetraText>Facebook help</TetraText>
            </HeaderNavWrapperTitle>
            <CloseActionIcon onClick={() => setOpen(false)} />
          </HeaderNavWrapper>
        </MenuButtonMobileWrapper>
        <ListHelpCenterTopNavTab />
      </WrapperNavigationListHelpNavOptions>
      <MenuButtonMobileWrapper>
        <BaseButtonAvatarAction
          icon={AiOutlineMenu}
          onClick={() => setOpen(true)}
        />
      </MenuButtonMobileWrapper>
    </>
  );
};

export default HelpCenterTopNavTabTopics;
