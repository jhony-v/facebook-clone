import React from "react";
import { render } from "@test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonClose from "..";

describe("ButtonClose component", () => {
  it("should dispatch a close button event", () => {
    const handlerOnClose = jest.fn();
    render(<ButtonClose onClose={handlerOnClose} />);
    expect(handlerOnClose).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByRole("button"));
    expect(handlerOnClose).toHaveBeenCalledTimes(1);
  });
});
