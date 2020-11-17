import ButtonClose from "@fb-components/common/ButtonClose";
import Wrapper from "@fb-components/common/Wrapper";

const AbsoluteCloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <Wrapper absolute={{ right: "10px", top: "10px"}}>
      <ButtonClose onClose={onClose} />
    </Wrapper>
  );
};

export default AbsoluteCloseButton;
