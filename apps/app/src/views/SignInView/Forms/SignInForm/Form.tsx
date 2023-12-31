import React from "react";
import RaisedButton from "@fb-components/common/RaisedButton";
import { useForm } from "react-hook-form";
import FormEditText from "../components";

type FormData = {
  email: string;
  password: string;
};

const Form = () => {
  const { handleSubmit, control, errors } = useForm<FormData>();
  const onSubmit = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormEditText
        control={control}
        field={{
          name: "email",
          type: "email",
          placeholder: "Username or email addres"
        }}
        errors={{
          error: errors.email,
          message: "Type valid email"
        }}
      />
      <FormEditText
        control={control}
        field={{
          name: "password",
          type: "password",
          placeholder: "Username or email addres"
        }}
        errors={{
          error: errors.password,
          message: "Type valid password"
        }}
      />
      <RaisedButton
        as="input"
        type="submit"
        value="Sign in"
        variant="primary"
        fluid
      />
    </form>
  );
};

export default Form;
