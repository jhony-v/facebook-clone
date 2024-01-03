import React from "react";
import { render } from "@test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FacebookCloseWithAvatar from "..";

describe("FacebookCloseWithAvatar component", () => {
  it("should click is working", () => {
    const onHandlerClose = jest.fn();
    render(<FacebookCloseWithAvatar onClose={onHandlerClose} />);
    expect(onHandlerClose).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByRole("button"));
    expect(onHandlerClose).toHaveBeenCalledTimes(1);
  });
});
