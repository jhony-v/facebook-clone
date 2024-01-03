import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { css, styled } from "../lib/stitches.config";
import BaseText from "./BaseText";
import CloseActionIcon from "./CloseActionIcon";
import FloatingCard from "./FloatingCard";
import TetraText from "./TetraText";


const FloatingCardMessage = styled(FloatingCard, {
  width : "300px",
})

const Wrapper = styled("div", {
  display: "flex",
});

const WrapperContentMessage = styled("div", {
  mx : "10px"
})

const cssCheckIcon = css({
  color : "rgb(30,200,40)",
})

type FloatingMessageProps = {
  title?: string;
  message?: string;
};

const FloatingMessage = ({ title, message }: FloatingMessageProps) => {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <FloatingCardMessage position="bottom-right">
      <Wrapper>
        <AiFillCheckCircle size={50} className={cssCheckIcon()} />
        <WrapperContentMessage>
          <TetraText>{title}</TetraText>
          <BaseText size="small" color="secondary">{message}</BaseText>
        </WrapperContentMessage>
        <CloseActionIcon onClick={() => setClosed(true)} />
      </Wrapper>
    </FloatingCardMessage>
  );
};

export default FloatingMessage;
