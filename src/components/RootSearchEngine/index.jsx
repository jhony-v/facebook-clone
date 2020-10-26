import React from "react";
import { FiSearch } from "react-icons/fi";
import ActionButtonsController from "../ActionButtonsController";
import FlexWrapper from "../Common/FlexWrapper";
import Wrapper from "../Common/Wrapper";
import FacebookAvatar from "../FacebookAvatar";
import { StyledRootSearchEngine } from "./Atoms/elements";

const RootSearchEngine = () => {
  return (
    <StyledRootSearchEngine>
      <Wrapper flexNone>
        <FacebookAvatar />
      </Wrapper>
      <Wrapper m="0 10px">
        <ActionButtonsController.Input placeholder={ 
          <Wrapper p="0 100px 0 0">
              <FlexWrapper align="center">
                <FiSearch style={{ marginRight: "10px" }} size={20} /> Buscar en
                Facebook
              </FlexWrapper>
            </Wrapper>}
        />
      </Wrapper>
    </StyledRootSearchEngine>
  );
};

export default RootSearchEngine;
