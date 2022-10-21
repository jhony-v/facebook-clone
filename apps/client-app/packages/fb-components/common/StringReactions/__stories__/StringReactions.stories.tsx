import { Meta } from "@storybook/react/types-6-0";
import StringReactions from "..";

export default {
  title: "Common/StringReactions",
  component: StringReactions
} as Meta;

export const Default = () => (
  <StringReactions
    reactions={[
      {
        reaction: "Haha"
      },
      {
        reaction: "Love"
      },
      {
        reaction: "Like"
      }
    ]}
  />
);
