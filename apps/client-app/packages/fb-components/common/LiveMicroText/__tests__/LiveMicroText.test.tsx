import { render } from "@test-utils";
import { screen } from "@testing-library/react";
import React from "react";
import LiveMicroText from "..";

describe("LiveMicroText component", () => {
  it("should not showing live text", () => {
    render(<LiveMicroText />);
    const textLiveElement = screen.queryByText(/live/i);
    expect(textLiveElement).toBeNull();
  });

  it("should exist component in live", () => {
    render(<LiveMicroText live />);
    const textLiveElement = screen.queryByText(/live/i);
    expect(textLiveElement).toHaveTextContent("live");
  });
});
