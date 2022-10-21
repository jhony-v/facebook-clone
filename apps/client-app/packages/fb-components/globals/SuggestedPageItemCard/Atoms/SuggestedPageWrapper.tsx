import Card from "@fb-components/common/Card";
import styled from "styled-components";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import { FCWithChildren } from "@utils/types";

const PageWrapper = styled(Card).attrs({
  variant: "compact"
})`
  overflow: hidden;
  > ${FlexWrapper} {
    position: relative;
    flex-direction: column;
  }
`;

const SuggestedPageWrapper: FCWithChildren = ({ children }) => (
  <PageWrapper>
    <FlexWrapper>{children}</FlexWrapper>
  </PageWrapper>
);

export default SuggestedPageWrapper;
