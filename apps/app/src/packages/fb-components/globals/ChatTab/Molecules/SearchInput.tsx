import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import React from "react";
import { StyledInputSearch } from "./elements";

type SearchInputProps = {
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
const SearchInput = ({ onKeyUp }: SearchInputProps) => (
  <Wrapper p="10px 20px 20px">
    <FlexWrapper centerBetween>
      <TextLabel textSize={200}>To:</TextLabel>
      <StyledInputSearch onKeyUp={onKeyUp} autoFocus />
    </FlexWrapper>
  </Wrapper>
);

export default SearchInput;
