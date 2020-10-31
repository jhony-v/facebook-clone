import { memo } from "react";
import Avatar from "@fb-components/Avatar";
import RowItemSelectable from "@fb-components/RowItemSelectable";
import Wrapper from "@fb-components/Wrapper";

type RowItemProps = {
  style ?: React.CSSProperties,
  text ?: string;
  image ?: string;
}
const RowItem = memo(({ style, text, image } : RowItemProps) => {
  return (
    <Wrapper style={style}>
      <Wrapper m="10px">
        <RowItemSelectable  image={<Avatar src={image}  />} text={text} />
      </Wrapper>
    </Wrapper>
  );
});

export default RowItem;
