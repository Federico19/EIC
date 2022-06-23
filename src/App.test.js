import { render, screen } from "@testing-library/react";
//import '@testing-library/jest-dom/extend-expect';
import App from "./App";
import React from "react";

test("2 y 2 son 4!", () => {
	render(<App />);
	const linkElement = screen.getByText("2 y 2 son 4!");
	expect(linkElement).toBeInTheDocument();
}); 
