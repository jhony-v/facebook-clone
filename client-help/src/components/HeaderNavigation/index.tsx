import { useAtom } from "jotai";
import { css, styled } from "../../lib/stitches.config";
import { headerTabsAtom } from "../../stores/useNavigation.store";
import { toggleTheme } from "../../stores/useTheme.store";
import AppHeaderContainer from "../../ui/AppHeaderContainer";
import BaseButton from "../../ui/BaseButton";
import TetraText from "../../ui/TetraText";
import { FiSearch } from "react-icons/fi";
import { AiOutlineInbox } from "react-icons/ai";
import HelpCenterTopNavTab from "./components/HelpCenterTopNavTab";
import {HiOutlineSun} from "react-icons/hi"
import { useUpdateAtom } from "jotai/utils";

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

const circleButton = css({
  borderRadius: "100%",
  size: "40px",
  padding: "0px",
  alignment: "center",
});

const HeaderNavigation = () => {
  const [state] = useAtom(headerTabsAtom);
  const onToggleTheme = useUpdateAtom(toggleTheme)
  return (
    <LayoutHeaderNavigation>
      <TetraText>Help Center</TetraText>
      <WrapperOptions>
        {state.map((item) => (
          <HelpCenterTopNavTab key={item.id} item={item} />
        ))}
      </WrapperOptions>
      <WrapperOptions>
        <BaseButton
          variant="secondary"
          className={circleButton()}
          icon={FiSearch}
        />
        <BaseButton
          variant="secondary"
          className={circleButton()}
          icon={AiOutlineInbox}
        />
        <BaseButton
          variant="secondary"
          className={circleButton()}
          icon={HiOutlineSun}
          onClick={() => onToggleTheme()}
        />
        <BaseButton variant="secondary">English(US)</BaseButton>
      </WrapperOptions>
    </LayoutHeaderNavigation>
  );
};

export default HeaderNavigation;
