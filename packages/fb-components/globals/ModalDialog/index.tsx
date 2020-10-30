import ButtonClose from "@fb-components/ButtonClose";
import PortalComponent from "@fb-components/PortalComponent";
import Wrapper from "@fb-components/Wrapper";
import { useEffect, useState } from "react";
import BackdropModal from "./Atoms/BackdropModal";
import { StyledHeaderWrapper } from "./Atoms/elements";

type ModalDialogProps = {
  w?: string;
  open: boolean;
  children : React.ReactNode;
  onModal? : (isOpen : boolean) => void;
  onClose: () => void;
};
const ModalDialog = ({ open, children, w, onModal, onClose }: ModalDialogProps) => {
  useEffect(() => {
    onModal && onModal(open);
  },[open]);

  return open ? (
      <PortalComponent className="modal">
        <BackdropModal w={w}>
              <Wrapper absolute={{
                right : "10px",
                top : "10px"
              }}> 
                <ButtonClose onClose={onClose} />
              </Wrapper>
              {children}
        </BackdropModal>
      </PortalComponent>
    ) : null;
};

ModalDialog.defaultProps = {
  w : "600px"
}

ModalDialog.Header = StyledHeaderWrapper;
ModalDialog.Body = Wrapper;


export default ModalDialog;
