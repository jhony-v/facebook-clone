import { Link } from "@reach/router";
import { styled } from "../lib/stitches.config";
import BaseText from "./BaseText";
import TetraText from "./TetraText";

type AnchorProps = {
  text?: string;
  underline?: boolean;
  weight?: boolean;
  to: string;
};

const StyledLink = styled(Link, {
  color: "inherit",
});

const TetraTextAnchor = styled(TetraText, {
  display: "block",
  color: "$primary",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "underline",
  },
  fontSize: "1rem",
  my: "9px",
});

const BaseTextAnchor = styled(BaseText, {
  color: "$primary",
  display : "inline",
  variants: {
    underline: {
      true: {
        textDecoration: "underline",
      },
    },
  },
});

const Anchor = ({ text, underline, weight, to }: AnchorProps) => {
  return (
    <StyledLink to={to}>
      {weight ? (
        <TetraTextAnchor color="primary" as="span">{text}</TetraTextAnchor>
      ) : (
        <BaseTextAnchor color="primary" underline={underline} weight={weight} as="span">
          {text}
        </BaseTextAnchor>
      )}
    </StyledLink>
  );
};

export default Anchor;
