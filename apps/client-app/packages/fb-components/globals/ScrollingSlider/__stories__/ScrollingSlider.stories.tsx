import FlexWrapper from "@fb-components/common/FlexWrapper";
import { Meta } from "@storybook/react/types-6-0";
import ScrollingSlider from "..";

export default {
  title: "Globals/ScrollingSlider",
  component: ScrollingSlider,
  decorators: [
    (Story) => (
      <div style={{ width: "90%", margin: "auto" }}>
        <Story />
      </div>
    )
  ]
} as Meta;

const TextItem = () => (
  <FlexWrapper
    style={{
      marginRight: "20px",
      width: "200px",
      height: "100px",
      background: "white",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    ITEM
  </FlexWrapper>
);

export const Default = () => (
  <ScrollingSlider title="Scrolling slider">
    <TextItem />
    <TextItem />
    <TextItem />
    <TextItem />
    <TextItem />
    <TextItem />
    <TextItem />
    <TextItem />
  </ScrollingSlider>
);
