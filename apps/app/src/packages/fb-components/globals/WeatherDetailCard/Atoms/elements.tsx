import Card from "@fb-components/common/Card";
import Spinner from "@fb-components/common/Spinner";
import styled from "styled-components";

export const WeatherDetailCardWrapper = styled(Card)`
  box-shadow: none;
  border: 1px solid ${(props) => props.theme.colors.vgBlackAlpha20};
  margin: 1em auto;
  width: 500px;
`;

export const SpinnerWithSpacing = styled(Spinner)`
  margin: 80px auto;
`;
