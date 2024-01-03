import { FiEdit } from "react-icons/fi";
import { StyledFloatingCircleButton } from "./elements";

type FLoatingButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const FloatingButton = ({ onClick }: FLoatingButtonProps) => (
  <StyledFloatingCircleButton onClick={onClick}>
    <FiEdit size={20} />
  </StyledFloatingCircleButton>
);

export default FloatingButton;
