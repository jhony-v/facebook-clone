import FormTextarea from "@fb-components/FormTextarea";
import ModalDialog from "@fb-components/ModalDialog";
import RaisedButton from "@fb-components/RaisedButton";
import Skeleton from "@fb-components/Skeleton";
import React from "react";
import HeaderTitle from "./Atoms/HeaderTitle";

const WriteNewPostModal = () => {
  return (
    <ModalDialog open={true} onClose={() => null}>
      <ModalDialog.Header p="20px" border>
        <HeaderTitle />
      </ModalDialog.Header>
      <ModalDialog.Body p="20px">
        <Skeleton type="circle" dimension="100px" />
        <FormTextarea placeholder="What's on your mind, Jhony?" />
        <RaisedButton w="100%">Add post</RaisedButton>
      </ModalDialog.Body>
    </ModalDialog>
  );
};

export default WriteNewPostModal;
