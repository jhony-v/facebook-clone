import TextLabel from "@fb-components/common/TextLabel";
import styled from "styled-components";

export default styled(TextLabel)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes[300]};
`;
