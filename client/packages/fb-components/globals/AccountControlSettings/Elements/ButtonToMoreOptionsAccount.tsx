import DropdownTabOptionsAnimatable from "@fb-components/DropdownTabOptionsAnimatable";
import ModalMoreOptionsAccount from "@fb-components/ModalMoreOptionsAccount";
import RaisedButton from "@fb-components/RaisedButton";
import Wrapper from "@fb-components/Wrapper";
import useToggle from "@fb-hooks/useToogle";
import { AiFillCaretDown } from "react-icons/ai";
import ControlButtonOption from "../Atoms/ControlButtonOption";

const ButtonMoreOptionsAccount = () => {
  const { active, onToggle } = useToggle();
  return (
    <>
      <ControlButtonOption icon={AiFillCaretDown} onClick={onToggle} />
      {active && (<ModalMoreOptionsAccount/>)}
    </>
  );
};

export default ButtonMoreOptionsAccount;
