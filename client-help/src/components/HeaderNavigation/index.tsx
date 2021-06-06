import { styled } from "../../lib/stitches.config";
import { toggleTheme } from "../../stores/theme.store";
import AppHeaderContainer from "../../ui/layouts/AppHeaderContainer";
import TetraText from "../../ui/TetraText";
import { AiOutlineInbox } from "react-icons/ai";
import { HiOutlineSun } from "react-icons/hi";
import { useUpdateAtom } from "jotai/utils";
import BaseButtonAvatarAction from "../../ui/BaseButtonAvatarAction";
import HelpCenterButtonSearchTopics from "./components/HelpCenterButtonSearchTopics";
import HelpCenterButtonLanguageTopics from "./components/HelpCenterButtonLanguageTopics";
import HelpCenterTopNavTabTopics from "./components/HelpCenterTopNavTabTopics";
import Facebook from "../../ui/Facebook";

const LayoutHeaderNavigation = styled(AppHeaderContainer, {
  padding: "5px 15px",
  justifyContent: "space-between",
});

const WrapperOptions = styled("div", {
  display: "flex",
  height: "100%",
  alignItems : "center",
  variants : {
    options  : {
      true : {
        alignItems : "center",
        " & > * + *" : {
          marginLeft : "10px",
        },
      }
    }
  }
});


const FacebookTitleWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  cursor : "pointer",
  [`& ${TetraText}`] : {
    marginLeft : "10px"
  }
});



const HeaderNavigation = () => {
  const onToggleTheme = useUpdateAtom(toggleTheme);

  return (
    <LayoutHeaderNavigation>
      <FacebookTitleWrapper>
        <Facebook/>
        <TetraText 
          css={{
            "@max3" : {
              display : "none"
            }
          }} 
          onClick={() => (window.location.href = "/")}
        >
            Help Center
        </TetraText>
      </FacebookTitleWrapper>
      <WrapperOptions>
          <HelpCenterTopNavTabTopics/>
      </WrapperOptions>
      <WrapperOptions options >
        <HelpCenterButtonSearchTopics/>
        <BaseButtonAvatarAction variant="secondary" icon={AiOutlineInbox} />
        <BaseButtonAvatarAction
          variant="secondary"
          icon={HiOutlineSun}
          onClick={() => onToggleTheme()}
        />
        <HelpCenterButtonLanguageTopics/>
      </WrapperOptions>
    </LayoutHeaderNavigation>
  );
};

export default HeaderNavigation;
