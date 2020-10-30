import EditText from "@fb-components/EditText";
import FlexWrapper from "@fb-components/FlexWrapper";
import Grid from "@fb-components/Grid";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import { GetComponentProps } from "@utils/transforms";
import { StyledGlobal } from "./elements";


type FormEditTextProps = GetComponentProps<typeof EditText>
export const FormEditText = (props : FormEditTextProps) => (
  <Wrapper m="20px 0">
    <EditText {...props} variant="outline" fluid />
  </Wrapper>
);


type FormOptionsSignInProps = {
    onSignUp : () => void
}
export const FormOptionsSignIn : React.FC<FormOptionsSignInProps> = (props) => {
  return (
    <Wrapper m="30px 0">
      <FlexWrapper flexDirection="column" align="center">
        <TextLabel textColor="vgTextBlack" weight textSize={200}>Or sign in with other account?</TextLabel>
        <Wrapper p="25px 0">{props.children}</Wrapper>
        <Wrapper p="20px 0">
          <TextLabel textSize={200} textColor="vgTextBlack">Dont't have an account?</TextLabel>
          <Wrapper p="0 5px" inlineBlock>
              <TextLabel textSize={200} textColor="vgTextPrimary" onClick={props.onSignUp}>Click herre to sign up.</TextLabel>
          </Wrapper>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
  );
};



export const FormOptionsAccessWithSocial = () => {
  return(
    <Grid repeatColumns={4} gap="20px">
      <StyledGlobal.ImageNetwork src="https://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png" />
      <StyledGlobal.ImageNetwork src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" />
      <StyledGlobal.ImageNetwork src="https://e7.pngegg.com/pngimages/792/947/png-clipart-instagram-logo-social-media-instagram-login-facebook-advertising-instagram-text-logo.png" />
      <StyledGlobal.ImageNetwork src="https://1000marcas.net/wp-content/uploads/2019/12/Pinterest-Logo.png" />
    </Grid>
  )
}