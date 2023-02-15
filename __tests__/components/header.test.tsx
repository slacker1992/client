import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmployeeList from "@/app/employee/list/page";
import Header from "@/components/Header";

describe("Describe employee management header", () => {
  it("Should have Employee Manager text", () => {
    render(<Header />);

    const header = screen.getByTestId("header-menu-title");
    const headerText = "Employee Manager";
    expect(header).toHaveTextContent(headerText);
  });
});
