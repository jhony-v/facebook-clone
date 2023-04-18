import FacebookAvatar from "@fb-components/application/FacebookAvatar";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import React from "react";
import { FiSearch } from "react-icons/fi";
import ActionButtonsController from "../ActionButtonsController";
import { StyledRootSearchEngine } from "./Atoms/elements";

const RootSearchEngine = () => (
  <StyledRootSearchEngine>
    <Wrapper flexNone>
      <FacebookAvatar />
    </Wrapper>
    <Wrapper m="0 10px">
      <ActionButtonsController.Input
        placeholder={
          <Wrapper p="0 100px 0 0">
            <FlexWrapper align="center">
              <FiSearch style={{ marginRight: "10px" }} size={20} />
              Buscar en Facebook
            </FlexWrapper>
          </Wrapper>
        }
      />
    </Wrapper>
  </StyledRootSearchEngine>
);

export default RootSearchEngine;
