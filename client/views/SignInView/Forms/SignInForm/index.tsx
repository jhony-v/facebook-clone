import { FormOptionsAccessWithSocial } from "./components";
import { StyledGlobal } from "../elements";
import { FormOptionsSignIn, FormSignInHeader } from "./components";
import Form from "./Form";

export default function SignInForm() {
  return (
    <>
    <StyledGlobal.FormContainer>
      <FormSignInHeader />
      <Form/>
      <FormOptionsSignIn>
        <FormOptionsAccessWithSocial />
      </FormOptionsSignIn>
    </StyledGlobal.FormContainer>
    </>
  );
}
