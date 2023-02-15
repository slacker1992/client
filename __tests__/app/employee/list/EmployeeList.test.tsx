import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmployeeList from "@/app/employee/list/page";

describe("Describe employee list page", () => {
  it("Should Render Properly", () => {
    render(<EmployeeList />);
    const header = screen.getByTestId("employeeListHeader");
    const headerText = "Employee List";
    expect(header).toHaveTextContent(headerText);
  });

  it("Should have link to add employee page", () => {
    render(<EmployeeList />);
    const link = screen.getByTestId("styled-button");
    expect(link).toHaveAttribute("href");
  });
});
