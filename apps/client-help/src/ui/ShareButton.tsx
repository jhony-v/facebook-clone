import { IoMdShareAlt } from "react-icons/io";
import { styled } from "../lib/stitches.config";

type ShareButtonProps = {
  text?: string;
};


const ShareButtonStyled = styled("button", {
  color : "$primary",
  background : "$bgWhite",
  fontWeight: "bold",
  fontSize : ".9em",
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  height : "46px",
  borderRadius: "6px",
  boxSizing : "border-box",
  padding: "7px 10px",
  [`& ${IoMdShareAlt}`] : {
      marginRight : "20px"
  }
})

const ShareIcon = styled(IoMdShareAlt, {
    marginRight  :"6px",
})

const ShareButton = (props: ShareButtonProps) => {
  return (
    <ShareButtonStyled>
      <ShareIcon/>
      {props.text}
    </ShareButtonStyled>
  );
};

ShareButton.defaultProps = {
  text: "Share article",
};

export default ShareButton;
