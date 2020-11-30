import { FC } from 'react';
import Card from '@fb-components/common/Card';
import styled from 'styled-components';
import FlexWrapper from '@fb-components/common/FlexWrapper';

const PageWrapper = styled(Card).attrs({
  variant: 'compact',
})`
  overflow: hidden;
  > ${FlexWrapper} {
    position: relative;
    flex-direction: column;
  }
`;

const SuggestedPageWrapper: FC = ({ children }) => (
  <PageWrapper>
    <FlexWrapper>{children}</FlexWrapper>
  </PageWrapper>
);

export default SuggestedPageWrapper;
