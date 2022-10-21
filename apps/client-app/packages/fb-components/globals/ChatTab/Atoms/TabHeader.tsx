import FlexWrapper from "@fb-components/common/FlexWrapper";
import RoundButton from "@fb-components/common/RoundButton";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { VscClose } from "react-icons/vsc";

type TabHeaderProps = {
  titleHeader?: string;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const TabHeader = ({ titleHeader, onClose }: TabHeaderProps) => (
  <Wrapper p="10px 20px 5px">
    <FlexWrapper centerBetween>
      <TextLabel weight data-testid="title-header">
        {titleHeader}
      </TextLabel>
      <RoundButton onClick={onClose} colorIcon="vgPrimary">
        <VscClose size={30} />
      </RoundButton>
    </FlexWrapper>
  </Wrapper>
);

export default TabHeader;
