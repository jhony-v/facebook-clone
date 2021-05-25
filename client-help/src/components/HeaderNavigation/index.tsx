import { styled } from "../../lib/stitches.config";
import { toggleTheme } from "../../stores/theme.store";
import AppHeaderContainer from "../../ui/layouts/AppHeaderContainer";
import BaseButton from "../../ui/BaseButton";
import TetraText from "../../ui/TetraText";
import { FiSearch } from "react-icons/fi";
import { AiOutlineInbox } from "react-icons/ai";
import { HiOutlineSun } from "react-icons/hi";
import { useUpdateAtom } from "jotai/utils";
import BaseButtonAvatarAction from "../../ui/BaseButtonAvatarAction";
import ListHelpCenterTopNavTab from "./components/ListHelpCenterTopNavTab";

const LayoutHeaderNavigation = styled(AppHeaderContainer, {
  padding: "5px 15px",
  justifyContent: "space-between",
});

const WrapperOptions = styled("div", {
  display: "flex",
  height: "100%",
  "& > button + *": {
    marginLeft: "10px",
  },
});

const FacebookTitleWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  [`& ${TetraText}`] : {
    marginLeft : "10px"
  }
});

const HeaderNavigation = () => {
  const onToggleTheme = useUpdateAtom(toggleTheme);

  return (
    <LayoutHeaderNavigation>
      <FacebookTitleWrapper>
        <img src="/favicon.ico" alt="facebook help center logo" width="35" />
        <TetraText onClick={() => (window.location.href = "/")}>
          Help Center
        </TetraText>
      </FacebookTitleWrapper>
      <WrapperOptions>
        <ListHelpCenterTopNavTab />
      </WrapperOptions>
      <WrapperOptions>
        <BaseButtonAvatarAction variant="secondary" icon={FiSearch} />
        <BaseButtonAvatarAction variant="secondary" icon={AiOutlineInbox} />
        <BaseButtonAvatarAction
          variant="secondary"
          icon={HiOutlineSun}
          onClick={() => onToggleTheme()}
        />
        <BaseButton variant="secondary">English(US)</BaseButton>
      </WrapperOptions>
    </LayoutHeaderNavigation>
  );
};

export default HeaderNavigation;
