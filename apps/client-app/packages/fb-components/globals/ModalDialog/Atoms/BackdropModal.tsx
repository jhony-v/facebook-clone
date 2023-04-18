import Card from "@fb-components/common/Card";
import Wrapper from "@fb-components/common/Wrapper";
import { FCWithChildren } from "@utils/types";
import AbsoluteCloseButton from "./AbsoluteCloseButton";
import { StyledBackdropScreenWrapper, WrapperBodyAnimatable } from "./elements";

type BackdropModalProps = {
  w?: string;
  onClose: () => void;
};

const BackdropModal: FCWithChildren<BackdropModalProps> = ({
  w,
  children,
  onClose
}) => (
  <StyledBackdropScreenWrapper>
    <Wrapper m="auto" role="dialog">
      <WrapperBodyAnimatable w={w}>
        <Card>
          <AbsoluteCloseButton onClose={onClose} />
          {children}
        </Card>
      </WrapperBodyAnimatable>
    </Wrapper>
  </StyledBackdropScreenWrapper>
);

export default BackdropModal;
