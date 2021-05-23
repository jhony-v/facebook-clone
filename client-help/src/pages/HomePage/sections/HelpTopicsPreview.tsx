import React from "react";
import { styled,css } from "../../../lib/stitches.config";
import { FiSearch } from "react-icons/fi";

const InputWrapper = styled("div", {
  backgroundColor: "$text200",
  borderRadius: "20px",
  fontSize: "15px",
  marginTop: "10px",
  marginBottom: "10px",
  alignItems: "center",
  padding: "25px",
  width: "$full",
  display: "flex",
  boxSizing: "border-box",
});

const InputEngine = styled("input", {
    marginLeft : "10px",
    flex : 1,
    "&::placeholder" : {
        color : "$text500"
    }
});

const colorIcon = css({
    color : "$text500"
})

const HelpTopicsPreview = () => {
  return (
      <InputWrapper role="input">
        <FiSearch className={colorIcon()} size={20} />
        <InputEngine placeholder="Search help articles..." />
      </InputWrapper>
  );
};

export default HelpTopicsPreview;
