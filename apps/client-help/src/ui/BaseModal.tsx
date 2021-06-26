import { useAtomValue } from "jotai/utils";
import React, { RefObject } from "react";
import { VscClose } from "react-icons/vsc";
import { css, styled } from "../lib/stitches.config";
import BaseButtonAvatarAction from "./BaseButtonAvatarAction";
import { isDarkThemeAtom } from "../stores/theme.store"


const cssModal = {
  dark : {
    backdrop :  css({
      backgroundColor: "rgba(0,0,0,.4)",
    }),
    content: css({
      boxShadow: "0 5px 10px rgba(0,0,0,.3),0 10px 20px rgba(0,0,0,.4)",
    })
  },
  light : {
    backdrop :  css({
      backgroundColor: "rgba(255,255,255,.8)",
    }),
    content: css({
      boxShadow: "0 8px 30px rgba(100,100,100,.3),0 2px 6px rgba(0,0,0,.03)",
    })
  }

}

const Backdrop = styled("div", {
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ContentLayoutBody = styled("div", {
  background: "$bg",
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

const FlexibleLayout =  styled("div", {
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
  size ?: keyof typeof ContentLayoutBody["variants"]["size"];
  refModal ?: RefObject<any>;
};

type BaseModalHeaderProps = BaseModalProps & {
    onClose ?: () => void,
    allowClose ?: boolean;
};
type BaseModalMainProps = BaseModalProps;


const BaseModal = ({ children, size, refModal }: BaseModalProps) => {
  const isDarkTheme = useAtomValue(isDarkThemeAtom);
  const backdropClassname  = isDarkTheme ? cssModal.dark.backdrop : cssModal.light.backdrop;
  const contentClassname = isDarkTheme ? cssModal.dark.content : cssModal.light.content;
  return (
    <Backdrop className={backdropClassname()}>
      <ContentLayoutBody 
        ref={refModal} 
        size={size}
        className={contentClassname()}
      > 
        {children}
      </ContentLayoutBody>
    </Backdrop>
  );
};

BaseModal.Header = ({ children, onClose, allowClose = true }: BaseModalHeaderProps) => {
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
