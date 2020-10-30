import FacebookAvatar from "@fb-components/FacebookAvatar";
import RaisedButton from "@fb-components/RaisedButton";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import React from "react";
import { useForm } from "react-hook-form";
import { FormEditText, FormOptionsAccessWithSocial, FormOptionsSignIn } from "./components";
import { StyledGlobal } from "./elements";

type FormData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (fields : FormData) => {
    alert();
  };
  return (
    <StyledGlobal.Container>
        <FacebookAvatar />
        <Wrapper w="80%" p="28px 0">
            <TextLabel weight textColor="vgTextBlack" textSize={800}>Welcome, Please sign in</TextLabel>
        </Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormEditText ref={register} name="email" placeholder="Username or email addres"/>
        <FormEditText ref={register} name="password" placeholder="Password" />
        <RaisedButton as="input" type="submit"  value="Sign in" variant="primary" fluid  />
        <FormOptionsSignIn onSignUp={()=>null}>
          <FormOptionsAccessWithSocial/>
        </FormOptionsSignIn>
      </form>
    </StyledGlobal.Container>
  );
};

export default SignInForm;
