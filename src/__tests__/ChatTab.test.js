import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components";
import TabHeader from "../components/ChatTab/ChatTabAtoms/TabHeader"
import FloatingButton from "../components/ChatTab/ChatTabAtoms/FloatingButton"
import TabOptions from "../components/ChatTab/ChatTabMolecules/TabOptions";

afterEach(cleanup);

describe("Chat tab components", () => {

  test("should exists components header and allow emit event onClose", () => {
    const handlerClick = jest.fn()
    const { getByTestId } = render(<TabHeader titleHeader="message" onClose={handlerClick} />);
    expect(getByTestId("title-header")).toHaveTextContent("message");
    fireEvent.click(getByTestId("button-close"))
    expect(handlerClick).toHaveBeenCalledTimes(1);
  })

  test("call onClick from floating button", () => {
    const handlerClick = jest.fn();
    const {  getByTestId } = render(<FloatingButton onClick={handlerClick} />);
    fireEvent.click(getByTestId("floating-button"))
    expect(handlerClick).toHaveBeenCalledTimes(1);
  })

  test('should tab options is clicked correctly', () => {
    let idSelected = "";
    const handlerSelected = jest.fn( (id) => {
      idSelected = id;
    });
    const { getByTestId } = render(<TabOptions onSelectedOption={handlerSelected}>
        <TabOptions.Option optionId="a" />
        <TabOptions.Option optionId="b" />
      </TabOptions>)
    fireEvent.click(getByTestId("a"))
    expect(idSelected).toBe("a")
    fireEvent.click(getByTestId("b"))
    expect(idSelected).toBe("b")
  });
});

