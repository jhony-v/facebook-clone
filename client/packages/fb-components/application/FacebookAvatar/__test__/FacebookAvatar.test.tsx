import React from "react";
import { render } from "@test-utils";
import FacebookAvatar from "..";
import { cleanup, screen } from "@testing-library/react";

beforeAll(() => {
  cleanup();
})

describe("Facebook avatar", () => {
  it("should render facebook avatar component", () => {
    render(<FacebookAvatar />);
    const avatarElement = screen.queryByRole("link");
    expect(avatarElement).toBeInTheDocument();
  });
});
