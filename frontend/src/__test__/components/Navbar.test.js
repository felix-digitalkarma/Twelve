import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../../components/Navbar";

test("renders NavBar", () => {
  const { getByText } = render(<NavBar />);
  const linkElement = getByText(/Stories/i);
  expect(linkElement).toBeInTheDocument();
});
