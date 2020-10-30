import ButtonClose from "@fb-components/ButtonClose";
import PortalComponent from "@fb-components/PortalComponent";
import Wrapper from "@fb-components/Wrapper";
import { useEffect, useState } from "react";
import BackdropModal from "./Atoms/BackdropModal";

type ModalDialogProps = {
  open: boolean;
  children : React.ReactNode;
  w: string;
};
const ModalDialog = ({ open, children, w }: ModalDialogProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpen(open);
  }, [open]);

  if (isOpen) {
    return (
      <PortalComponent className="modal">
        <BackdropModal w={w}>
              <Wrapper absolute={{
                right : "10px",
                top : "10px"
              }}> 
                <ButtonClose onClose={() => setOpen(false)} />
              </Wrapper>
              {children}
        </BackdropModal>
      </PortalComponent>
    );
  }
  return null;
};

ModalDialog.defaultProps = {
  w : "600px"
}

ModalDialog.Header = ({children}) => (<Wrapper>{children}</Wrapper>)
ModalDialog.Body = ({children}) => (<Wrapper>{children}</Wrapper>)


export default ModalDialog;
