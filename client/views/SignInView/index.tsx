import Grid from "@fb-components/common/Grid";
import { StyledGlobal } from "./Forms/elements";
import SignInForm from "./Forms/SignInForm";

const SignInView = () => {
  return (
    <StyledGlobal.Background>
      <Grid sizeColumns={[400, "1fr"]}>
        <SignInForm />
      </Grid>
    </StyledGlobal.Background>
  );
};

export default SignInView;
