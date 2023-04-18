import SquareImage from "@fb-components/common/SquareImage";
import TextLabel from "@fb-components/common/TextLabel";
import React from "react";
import styled from "styled-components";

const TextSpacing = styled(TextLabel)`
  display: block;
  margin: 10px 0;
  text-align: center;
`;

const ErrorImage = styled(SquareImage)`
  margin: 2em auto;
  background: none;
  width: 150px;
  height: 100px;
  object-fit: contain;
`;

const ErrorHeaderMessage = () => (
  <>
    <ErrorImage src="https://simpleicon.com/wp-content/uploads/paper-clip-1.png" />
    <TextSpacing weight textSize={600}>
      This Page Isn't Available
    </TextSpacing>
    <TextSpacing>
      The link may be broken, or the page may have been removed. Check to see if
      the link you're trying to open is correct.
    </TextSpacing>
  </>
);

export default ErrorHeaderMessage;
