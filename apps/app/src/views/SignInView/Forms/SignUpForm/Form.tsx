import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
};

const Form = () => {
  const { handleSubmit } = useForm<FormData>();
  const onSubmit = () => {};

  return <form onSubmit={handleSubmit(onSubmit)} />;
};

export default Form;
