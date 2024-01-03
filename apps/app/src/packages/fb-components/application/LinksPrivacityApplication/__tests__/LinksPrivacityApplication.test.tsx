import React from "react";
import { render } from "@test-utils";
import { screen } from "@testing-library/react";
import LinksPrivacityApplication from "..";

describe("LinksPrivacityApplication component", () => {
  it("should render link component", () => {
    render(<LinksPrivacityApplication />);
    const expectedText = screen.getByText(/Facebook 2020/i);
    expect(expectedText).toHaveTextContent("Facebook 2020");
  });
});
