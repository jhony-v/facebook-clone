import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import Card from "../Card";

const WrapperButton = styled(Card)`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  margin: auto;
  color: ${(props) => props.theme.colors.vgBlackAlpha40};
  border: 1px solid ${(props) => props.theme.colors.vgBlackAlpha20};
  &:active {
    transform: scale(0.96);
  }
`;

type ChevronIconButtonProps = {
  direction: "right" | "left";
  onClick?: () => void;
};

const ChevronIconButtton = (props: ChevronIconButtonProps) => {
  const { onClick, direction } = props;
  let IconComponent;
  if (direction === "left") {
    IconComponent = FiChevronLeft;
  } else if (direction === "right") {
    IconComponent = FiChevronRight;
  }

  return (
    <WrapperButton onClick={onClick}>
      <IconComponent />
    </WrapperButton>
  );
};

ChevronIconButtton.defaultProps = {
  onClick: () => null
};

export default ChevronIconButtton;
