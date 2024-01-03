import PortalComponent from "@fb-components/common/PortalComponent";
import Wrapper from "@fb-components/common/Wrapper";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import BackdropModal from "./Atoms/BackdropModal";
import { StyledHeaderWrapper } from "./Atoms/elements";

type ModalDialogProps = {
  w?: string;
  open: boolean;
  children: React.ReactNode;
  onModal?: (isOpen: boolean) => void;
  onClose: () => void;
};
const ModalDialog = ({
  open,
  children,
  w = "600px",
  onModal,
  onClose
}: ModalDialogProps) => {
  useEffect(() => {
    onModal && onModal(open);
  }, [open, onModal]);

  return (
    <AnimatePresence>
      {open && (
        <PortalComponent className="modal">
          <BackdropModal w={w} onClose={onClose}>
            {children}
          </BackdropModal>
        </PortalComponent>
      )}
    </AnimatePresence>
  );
};

ModalDialog.Header = StyledHeaderWrapper;
ModalDialog.Body = Wrapper;

export default ModalDialog;
