import FlexWrapper from "@fb-components/common/FlexWrapper";
import TabOptions from "@fb-components/globals/TabOptions";
import Wrapper from "@fb-components/common/Wrapper";
import React from "react";
import { FaFacebookMessenger, FaPhone, FaUser } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { RaisedButtonMoreOptions } from "./Atoms/elements";

const AccountNavigator = () => (
  <Wrapper className="profile__pagelet">
    <FlexWrapper justify="space-between" align="center">
      <Wrapper w="60%">
        <TabOptions
          onSelectedOption={(e) => {}}
          initialId="a"
          style={{
            boxShadow: "none"
          }}
        >
          <>
            <TabOptions.Option optionId="a" text="Posts" />
            <TabOptions.Option optionId="b" text="About" />
            <TabOptions.Option optionId="c" text="Friends" />
            <TabOptions.Option optionId="d" text="Photos" />
            <TabOptions.Option optionId="e" text="Videos" />
            <TabOptions.Option optionId="f" text="More" />
          </>
        </TabOptions>
      </Wrapper>
      <FlexWrapper>
        <RaisedButtonMoreOptions>
          {" "}
          <FaFacebookMessenger style={{ marginRight: "5px" }} /> Message
        </RaisedButtonMoreOptions>
        <RaisedButtonMoreOptions>
          {" "}
          <FaPhone />
        </RaisedButtonMoreOptions>
        <RaisedButtonMoreOptions>
          {" "}
          <FaUser />
        </RaisedButtonMoreOptions>
        <RaisedButtonMoreOptions>
          {" "}
          <FiMoreHorizontal />
        </RaisedButtonMoreOptions>
      </FlexWrapper>
    </FlexWrapper>
  </Wrapper>
);

export default AccountNavigator;
