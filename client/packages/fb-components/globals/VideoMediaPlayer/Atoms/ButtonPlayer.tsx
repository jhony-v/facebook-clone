import { ButtonPlayerContainer } from "./element";
import { BsFillPlayFill, BsStopFill } from "react-icons/bs";

type ButtonPlayerProps = {
  onClick?: () => void;
};

const ButtonPlayer = {
  Play: ({ onClick }: ButtonPlayerProps) => {
    return (
      <ButtonPlayerContainer onClick={onClick}>
        <BsFillPlayFill />
      </ButtonPlayerContainer>
    );
  },
  Stop: ({ onClick }: ButtonPlayerProps) => {
    <ButtonPlayerContainer onClick={onClick}>
      <BsStopFill />
    </ButtonPlayerContainer>;
  },
};

export default ButtonPlayer;
