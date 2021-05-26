import BaseButton from "./BaseButton";
import { IoMdShareAlt } from "react-icons/io";
import { css, styled } from "../lib/stitches.config";

type ShareButtonProps = {
  text?: string;
};

const shareButtonStyles = css({
    color : "$primary",
    background : "$bgWhite",
    [`& ${IoMdShareAlt}`] : {
        marginRight : "20px"
    }
})

const ShareIcon = styled(IoMdShareAlt,{
    marginRight  :"6px",
})

const ShareButton = (props: ShareButtonProps) => {
  return (
    <BaseButton size="medium" className={shareButtonStyles()}>
      <ShareIcon size={20} />
      {props.text}
    </BaseButton>
  );
};

ShareButton.defaultProps = {
  text: "Share article",
};

export default ShareButton;
