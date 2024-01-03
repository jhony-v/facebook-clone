import React from "react";
import { render } from "@test-utils";
import { cleanup, screen } from "@testing-library/react";
import FacebookAvatar from "..";

beforeAll(() => {
  cleanup();
});

describe("Facebook avatar", () => {
  it("should render facebook avatar component", () => {
    render(<FacebookAvatar />);
    const avatarElement = screen.queryByRole("link");
    expect(avatarElement).toBeInTheDocument();
  });
});
