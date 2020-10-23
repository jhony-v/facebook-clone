import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components";
import TabHeader from "../components/ChatTab/ChatTabAtoms/TabHeader"
import FloatingButton from "../components/ChatTab/ChatTabAtoms/FloatingButton"
import TabOptions from "../components/ChatTab/ChatTabMolecules/TabOptions";
import ChatTab from "../components/ChatTab";


describe("ChatTab component", () => {

  test('should toggle main chat tab is visible', () => {
    render(<ChatTab/>);
    expect(screen.queryByTestId(/chat-tab-portal$/i)).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByTestId(/chat-tab-portal$/i)).toBeInTheDocument()
  });

  test("should exists components header and allow emit event onClose", () => {
    const handlerClick = jest.fn()
    render(<TabHeader titleHeader="message" onClose={handlerClick} />);
    expect(screen.getByTestId("title-header")).toHaveTextContent("message");
    fireEvent.click(screen.getByRole("button"))
    expect(handlerClick).toHaveBeenCalledTimes(1);
  })

  test("call onClick from floating button", () => {
    const handlerClick = jest.fn();
    render(<FloatingButton onClick={handlerClick} />);
    fireEvent.click(screen.getByRole("button"))
    expect(handlerClick).toHaveBeenCalledTimes(1);
  })

  test('should tab options is clicked correctly', () => {
    let idSelected = "";
    const handlerSelected = jest.fn( (id) => {
      idSelected = id;
    });
    render(
      <TabOptions onSelectedOption={handlerSelected}>
        <TabOptions.Option optionId="a" />
        <TabOptions.Option optionId="b" />
      </TabOptions>
    )
    fireEvent.click(screen.getByTestId("a"))
    expect(idSelected).toBe("a")
    fireEvent.click(screen.getByTestId("b"))
    expect(idSelected).toBe("b")
  });
});

