import Avatar from "@fb-components/common/Avatar";
import RowItemSelectable from "@fb-components/common/RowItemSelectable";
import Wrapper from "@fb-components/common/Wrapper";

type RowItemProps = {
  text?: string;
  image?: string;
};
const RowItem = ({ text, image }: RowItemProps) => (
  <Wrapper p="5px 10px">
    <RowItemSelectable
      image={<Avatar src={image} dimension="32px" />}
      text={text}
    />
  </Wrapper>
);

export default RowItem;
