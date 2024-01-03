import ModalMoreOptionsAccount from "@fb-components/globals/ModalMoreOptionsAccount";
import useToggle from "@fb-hooks/useToogle";
import { AiFillCaretDown } from "react-icons/ai";
import ControlButtonOption from "../Atoms/ControlButtonOption";

const ButtonMoreOptionsAccount = () => {
  const { active, onToggle } = useToggle();
  return (
    <>
      <ControlButtonOption icon={AiFillCaretDown} onClick={onToggle} />
      {active && <ModalMoreOptionsAccount />}
    </>
  );
};

export default ButtonMoreOptionsAccount;
