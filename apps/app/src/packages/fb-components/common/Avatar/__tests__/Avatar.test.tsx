import { render } from "@test-utils";
import React from "react";
import Avatar from "..";

describe("Avatar component", () => {
  it("should avatar is online", () => {
    render(<Avatar />);
  });
});
