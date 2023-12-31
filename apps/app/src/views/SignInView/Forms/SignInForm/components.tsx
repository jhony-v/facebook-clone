import FacebookAvatar from "@fb-components/application/FacebookAvatar";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import Grid from "@fb-components/common/Grid";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import useToggle from "@fb-hooks/useToogle";
import { FC, PropsWithChildren } from "react";
import StyledGlobal from "../elements";
import SignUpForm from "../SignUpForm";

export const FormOptionsSignIn: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { active, onToggle } = useToggle();
  return (
    <>
      <Wrapper m="30px 0">
        <FlexWrapper flexDirection="column" align="center">
          <TextLabel textColor="vgTextBlack" weight textSize={200}>
            Or sign in with other account?
          </TextLabel>
          <Wrapper p="25px 0">{children}</Wrapper>
          <Wrapper p="20px 0">
            <TextLabel textSize={200} textColor="vgTextBlack">
              Do not have an account?
            </TextLabel>
            <Wrapper p="0 5px" inlineBlock>
              <TextLabel
                textSize={200}
                textColor="vgTextPrimary"
                onClick={() => onToggle()}
              >
                Click herre to sign up.
              </TextLabel>
            </Wrapper>
          </Wrapper>
        </FlexWrapper>
      </Wrapper>
      <SignUpForm onClose={onToggle} open={active} />
    </>
  );
};

export const FormSignInHeader = () => (
  <>
    <FacebookAvatar />
    <Wrapper w="80%" p="28px 0 10px">
      <TextLabel weight textColor="vgTextBlack" textSize={800}>
        Welcome, Please sign in
      </TextLabel>
    </Wrapper>
  </>
);

export const FormOptionsAccessWithSocial = () => (
  <Grid repeatColumns={4} gap="20px">
    <StyledGlobal.ImageNetwork src="https://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png" />
    <StyledGlobal.ImageNetwork src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" />
    <StyledGlobal.ImageNetwork src="https://e7.pngegg.com/pngimages/792/947/png-clipart-instagram-logo-social-media-instagram-login-facebook-advertising-instagram-text-logo.png" />
    <StyledGlobal.ImageNetwork src="https://1000marcas.net/wp-content/uploads/2019/12/Pinterest-Logo.png" />
  </Grid>
);
