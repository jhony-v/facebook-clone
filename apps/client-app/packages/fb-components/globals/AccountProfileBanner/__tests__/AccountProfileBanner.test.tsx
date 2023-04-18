import React from "react";
import faker from "faker";
import { render } from "@test-utils";
import { screen } from "@testing-library/react";
import AccountProfileBanner from "..";

describe("AccountProfileBanner component to show in the profile", () => {
  it("should have a image avatar", () => {
    const image = faker.random.image();
    render(<AccountProfileBanner avatar={image} />);
    const imageElement = screen.queryByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement?.getAttribute("src")).toBe(image);
  });

  it("should have a text description if user", () => {
    const text = faker.name.firstName();
    const { rerender } = render(<AccountProfileBanner text={null} />);
    const textUsernameElement = screen.queryByText(text);
    expect(textUsernameElement).not.toBeInTheDocument();
    rerender(<AccountProfileBanner text={text} />);
    expect(textUsernameElement).toHaveTextContent(text);
  });
});
