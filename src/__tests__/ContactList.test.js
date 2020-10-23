import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactList from "../components/ContactList";
import { FiCamera, FiSearch } from "react-icons/fi";

describe("ContactList component", () => {
  test("should title event is showing correctly", () => {
    const title = "my contacts";
    render(<ContactList title={title} />);
    expect(screen.getByRole("heading")).toHaveTextContent(title);
  });

  test("should button options is clicked correct", () => {
    const handlerOnClick = jest.fn()  
    const totalElements = 2;
    render(
      <ContactList
        title="Contacts"
        options={
          <>
            <ContactList.Option icon={FiCamera} onClick={handlerOnClick} />
            <ContactList.Option icon={FiSearch} onClick={handlerOnClick} />
          </>
        }
      />
    );
    const buttonOptions = screen.getAllByRole("button");
    buttonOptions.forEach(e => {
        fireEvent.click(e)
    })
    expect(buttonOptions).toHaveLength(totalElements)
    expect(handlerOnClick).toHaveBeenCalledTimes(totalElements)
  });

});
