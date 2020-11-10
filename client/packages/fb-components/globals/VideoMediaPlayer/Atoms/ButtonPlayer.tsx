import { ButtonPlayerContainer } from "./element";
import { BsFillPlayFill, BsPause } from "react-icons/bs";

type ButtonPlayerProps = {
  onClick?: () => void;
};

const ButtonPlayer = {
  Play: ({ onClick }: ButtonPlayerProps) => {
    return (
      <ButtonPlayerContainer onClick={onClick}>
        <BsFillPlayFill color="white" />
      </ButtonPlayerContainer>
    );
  },
  Pause: ({ onClick }: ButtonPlayerProps) => {
    return(
      <ButtonPlayerContainer onClick={onClick}>
      <BsPause color="white" />
    </ButtonPlayerContainer>
    )
  },
};

export default ButtonPlayer;
