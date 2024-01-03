import {
  FormOptionsAccessWithSocial,
  FormOptionsSignIn,
  FormSignInHeader
} from "./components";
import StyledGlobal from "../elements";

import Form from "./Form";

export default function SignInForm() {
  return (
    <>
      <StyledGlobal.FormContainer>
        <FormSignInHeader />
        <Form />
        <FormOptionsSignIn>
          <FormOptionsAccessWithSocial />
        </FormOptionsSignIn>
      </StyledGlobal.FormContainer>
    </>
  );
}
