import { useAtom } from "jotai";
import { css, styled } from "../../lib/stitches.config";
import { tabsAtom } from "../../stores/mainNavigation";
import { toggleTheme } from "../../stores/theme";
import AppHeaderContainer from "../../ui/layouts/AppHeaderContainer";
import BaseButton from "../../ui/BaseButton";
import TetraText from "../../ui/TetraText";
import { FiSearch } from "react-icons/fi";
import { AiOutlineInbox } from "react-icons/ai";
import HelpCenterTopNavTab from "./components/HelpCenterTopNavTab";
import {HiOutlineSun} from "react-icons/hi"
import { useUpdateAtom } from "jotai/utils";
import { Link } from "@reach/router";
import BaseButtonAvatarAction from "../../ui/BaseButtonAvatarAction";

const LayoutHeaderNavigation = styled(AppHeaderContainer, {
  padding: "5px 10px",
  justifyContent: "space-between",
});

const WrapperOptions = styled("div", {
  display: "flex",
  height: "100%",
  "& > button + *" : {
    marginLeft : "10px"
  }
});

const HeaderNavigation = () => {
  const [state] = useAtom(tabsAtom);
  const onToggleTheme = useUpdateAtom(toggleTheme)
  return (
    <LayoutHeaderNavigation>
      <Link to="/">
        <TetraText>Help Center</TetraText>
      </Link>
      <WrapperOptions>
        {state.map((item) => (
          <HelpCenterTopNavTab key={item.id} item={item} />
        ))}
      </WrapperOptions>
      <WrapperOptions>
        <BaseButtonAvatarAction
          variant="secondary"
          icon={FiSearch}
        />
        <BaseButtonAvatarAction
          variant="secondary"
          icon={AiOutlineInbox}
        />
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
