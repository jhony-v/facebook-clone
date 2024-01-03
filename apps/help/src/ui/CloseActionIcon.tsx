import { VscClose } from "react-icons/vsc";
import { css } from "../lib/stitches.config";

const cssCloseIcon = css({
  color: "$text500",
  "@min2" : {
    cursor: "pointer",
  }
});

type CloseActionIconProps = {
  onClick ?: () => void;
};

const CloseActionIcon = ({ onClick }: CloseActionIconProps) => {
  return (
    <VscClose
      size={25}
      onClick={onClick}
      className={cssCloseIcon()}
    />
  );
};

export default CloseActionIcon;
