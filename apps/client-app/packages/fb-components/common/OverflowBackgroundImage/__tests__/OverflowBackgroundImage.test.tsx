import React from "react";
import faker from "faker";
import { render } from "@testing-library/react";
import OverflowBackgroundImage from "..";

describe("OverflowBackgroundImage component", () => {
  it("should render image success", () => {
    const image = faker.random.image();
    render(<OverflowBackgroundImage image={image} />);
  });
});
