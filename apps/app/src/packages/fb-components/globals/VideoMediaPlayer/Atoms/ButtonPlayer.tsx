import { BsFillPlayFill, BsPause } from "react-icons/bs";
import { ButtonPlayerContainer } from "./element";

type ButtonPlayerProps = {
  onClick?: () => void;
};

const ButtonPlayer = {
  Play: ({ onClick }: ButtonPlayerProps) => (
    <ButtonPlayerContainer onClick={onClick}>
      <BsFillPlayFill color="white" />
    </ButtonPlayerContainer>
  ),
  Pause: ({ onClick }: ButtonPlayerProps) => (
    <ButtonPlayerContainer onClick={onClick}>
      <BsPause color="white" />
    </ButtonPlayerContainer>
  )
};

export default ButtonPlayer;
