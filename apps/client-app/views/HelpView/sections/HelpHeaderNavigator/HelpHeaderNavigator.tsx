import FacebookAvatar from "@fb-components/application/FacebookAvatar";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import Button from "@views/HelpView/components/Button";
import { styled } from "@views/HelpView/config/stitches.config";
import helpStore from "@views/HelpView/store/helpStore";
import { BiSearch } from "react-icons/bi";
import { FaInbox } from "react-icons/fa";

const Header = styled("header", {
  display: "flex",
  position: "fixed",
  padding: "0px 20px",
  left: 0,
  top: 0,
  width: "$full",
  height: "$header-navigator-h",
  backgroundColor: "$light",
  boxShadow: "0 2px 4px rgba(0,0,0,.08)",
  "& .header__options button": {
    marginLeft: "10px"
  },
  [`& ${Button}`]: {
    marginTop: "5px",
    marginBottom: "5px"
  },
  [`& .header__navigation button`]: {
    marginLeft: "10px",
    marginRight: "10px",
    color: "$secondary-text"
  }
});

const HelpHeaderNavigator = () => {
  const navigationOptionsState = helpStore.useStoreState(
    (state) => state.navigationOptions
  );
  return (
    <Header>
      <FlexWrapper align="center">
        <Wrapper m="0 5px 0 0">
          <FacebookAvatar />
        </Wrapper>
        <TextLabel weight textColor="vgTextBlack">
          Servicio de ayuda
        </TextLabel>
      </FlexWrapper>
      <FlexWrapper className="header__navigation">
        {navigationOptionsState.map((option, index) => (
          <Button key={index}>{option.name}</Button>
        ))}
      </FlexWrapper>
      <FlexWrapper className="header__options">
        <Button variant="neutral" circle="medium">
          <BiSearch size={20} />
        </Button>
        <Button variant="neutral" circle="medium">
          <FaInbox size={20} />
        </Button>
        <Button variant="neutral">English</Button>
      </FlexWrapper>
    </Header>
  );
};

export default HelpHeaderNavigator;
