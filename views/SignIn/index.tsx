import FullScreenWrapper from "@fb-components/FullScreenWrapper";
import Grid from "@fb-components/Grid";
import React from "react";
import { StyledGlobal } from "./Forms/elements";
import SignInForm from "./Forms/SignInForm";
import GraphsAvatar from "./GraphsAvatar/GraphsAvatar";

const SignInView = () => {
  return (
    <StyledGlobal.Background>
      <Grid sizeColumns={[500, "1fr"]}>
        <SignInForm />
        <GraphsAvatar/>
      </Grid>
    </StyledGlobal.Background>
  );
};

export default SignInView;
