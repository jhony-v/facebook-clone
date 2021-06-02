import React from "react";
import { VscClose } from "react-icons/vsc";
import { styled } from "../lib/stitches.config";
import BaseButtonAvatarAction from "./BaseButtonAvatarAction";

const Backdrop = styled("div", {
  backgroundColor: "rgba(0,0,0,.4)",
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ContentLayoutBody = styled("div", {
  background: "$bg",
  boxShadow: "0 5px 10px rgba(0,0,0,.3),0 10px 20px rgba(0,0,0,.4)",
  borderRadius : 10,
  variants : {
      size : {
          normal : {
            width : "500px",
          },
          medium : {
            width : "750px",
          },
          large : {
            width : "1100px",
          }
      }
  },
  defaultVariants : {
      size : "normal"
  }
});

const HeaderLayoutBody = styled("header", {
  padding: 10,
  borderBottom: "1px solid $text200",
  color : "$text",
  display : "flex",
  alignItems  :"center",
});
const MainLayoutBody = styled("div", {});

const FlexibleLayout =  styled("div",{
    variants : {
        ml : {
            true : {
                marginLeft : "auto"
            }
        }
    }
})


type BaseModalProps = {
  children: React.ReactNode;
  size ?: keyof typeof ContentLayoutBody["variants"]["size"]
};

type BaseModalHeaderProps = BaseModalProps & {
    onClose ?: () => void,
    allowClose ?: boolean;
};
type BaseModalMainProps = BaseModalProps;


const BaseModal = ({ children,size }: BaseModalProps) => {
  return (
    <Backdrop>
      <ContentLayoutBody size={size}>{children}</ContentLayoutBody>
    </Backdrop>
  );
};

BaseModal.Header = ({ children,onClose, allowClose = true }: BaseModalHeaderProps) => {
  return <HeaderLayoutBody>
      {children}
      {allowClose && (
          <FlexibleLayout ml>
              <BaseButtonAvatarAction icon={VscClose} onClick={onClose} />
          </FlexibleLayout>
      )}
  </HeaderLayoutBody>;
};


BaseModal.Body = ({ children }: BaseModalMainProps) => {
  return <MainLayoutBody>{children}</MainLayoutBody>;
};

export default BaseModal;
