import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddEmployee from "@/app/employee/add/page";

describe("Describe employee Add page", () => {
  it("should render input element", () => {
    render(<AddEmployee />);
    const inputEl = screen.getByTestId("first_name");
    expect(inputEl).toHaveAttribute("onChange");
  });
});
