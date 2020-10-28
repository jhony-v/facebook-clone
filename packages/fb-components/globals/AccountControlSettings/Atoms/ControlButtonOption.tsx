import RoundButton from "@fb-components/RoundButton";
import Wrapper from "@fb-components/Wrapper";
import { GetComponentProps } from "@utils/transforms";

type ControlButtonOptionProps = GetComponentProps<typeof RoundButton> & {
  icon: React.JSXElementConstructor<{ size: number }>;
};
const ControlButtonOption = ({ icon: IconComponent, ...restProps }: ControlButtonOptionProps) => {
  return (
    <Wrapper m="0 5px">
      <RoundButton {...restProps} dimension="40px">
        <IconComponent size={20} />
      </RoundButton>
    </Wrapper>
  );
};
export default ControlButtonOption;
