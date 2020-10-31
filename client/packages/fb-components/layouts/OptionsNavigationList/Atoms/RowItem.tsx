import Avatar from "@fb-components/Avatar";
import RowItemSelectable from "@fb-components/RowItemSelectable";
import Wrapper from "@fb-components/Wrapper";

type RowItemProps = {
  text ?: string;
  image ?: string;
}
const RowItem = ({ text, image } : RowItemProps) => {
  return (
    <Wrapper p="5px 10px">
      <RowItemSelectable
        image={<Avatar src={image} dimension="32px" />}
        text={text}
      />
    </Wrapper>
  );
};

export default RowItem;
