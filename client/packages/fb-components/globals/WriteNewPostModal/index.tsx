import DropDownTabOptionsAnimatable from "@fb-components/DropdownTabOptionsAnimatable";
import FormTextarea from "@fb-components/FormTextarea";
import ModalDialog from "@fb-components/ModalDialog";
import RaisedButton from "@fb-components/RaisedButton";

import React from "react";
import HeaderTitle from "./Atoms/HeaderTitle";

type WriteNewPostModalProps = {
  actions : {
    open : boolean;
    onClose : () => void;
  }
}
const WriteNewPostModal = ({actions}: WriteNewPostModalProps) => {
  return (
    <ModalDialog open={actions.open} onClose={actions.onClose}>
      <ModalDialog.Header p="20px" border>
        <HeaderTitle />
      </ModalDialog.Header>
      <ModalDialog.Body p="20px">
        <FormTextarea placeholder="What's on your mind, Jhony?" />
        <RaisedButton w="100%">Add post</RaisedButton>
      </ModalDialog.Body>
    </ModalDialog>
  );
};

export default WriteNewPostModal;
