import ModalDialog from "@fb-components/ModalDialog";
import React from "react";
import { HeaderTitle } from "./components";
import Form from "./Form";

type SignUpFormProps = {
  onClose: () => void;
  open: boolean;
};
const SignUpForm = ({ onClose, open }: SignUpFormProps) => {
  return (
    <ModalDialog onClose={onClose} open={open}>
      <ModalDialog.Header border p="20px">
          <HeaderTitle/>
      </ModalDialog.Header>
      <ModalDialog.Body p="20px">
          <Form/>
      </ModalDialog.Body>
    </ModalDialog>
  );
};

export default SignUpForm;
