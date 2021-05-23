import { FC } from "react";
import { styled } from "../lib/stitches.config";

const Wrapper = styled("div", {
  margin: "auto",
  width: "720px",
  maxWidth: "95%",
});

const WrapperCenterContent: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WrapperCenterContent;
