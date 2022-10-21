import FlexWrapper from "@fb-components/common/FlexWrapper";
import RaisedButton from "@fb-components/common/RaisedButton";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { FCWithChildren } from "@utils/types";
import Link from "next/link";
import styled from "styled-components";

const StyledTextLinkMessage = styled(TextLabel)`
  font-weight: bold;
  color: ${(props) => props.theme.colors.vgTextPrimary};
  display: block;
  text-align: center;
  margin: 6px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const TextLinkMessage: FCWithChildren<{ href: string }> = ({
  children,
  href
}) => (
  <Link href={href}>
    <StyledTextLinkMessage as="a">{children}</StyledTextLinkMessage>
  </Link>
);

const TextLinkMessages = () => (
  <>
    <Wrapper m="15px auto">
      <FlexWrapper justify="center">
        <RaisedButton variant="primary">Go to news feed</RaisedButton>
      </FlexWrapper>
    </Wrapper>
    <TextLinkMessage href="/">Go back</TextLinkMessage>
    <TextLinkMessage href="/">Visit help center</TextLinkMessage>
  </>
);

export default TextLinkMessages;
