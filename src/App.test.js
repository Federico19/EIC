import { render, screen } from "@testing-library/react";
//import '@testing-library/jest-dom/extend-expect';
import App from "./App";
import React from "react";

// test('renders content',()=>{
//   const utils = render(<App />);
  
//   utils.getByText('2 y 2 son 4!');
//   //expect(component.container).toHaveTextContent('2 y 2 son 4!');
// });

test("2 y 2 son 4!", () => {
	render(<App />);
	const linkElement = screen.getByText("2 y 2 son 4!");
	expect(linkElement).toBeInTheDocument();
}); 



// //import request from "supertest";
// const app = require('../src/app');
// const request = require('supertest');
// //import app from "../src/app";

// describe('GET /', () => {
// 	test('/', async () => {
// 		await request(app).get('/').send().
// 			expect('2 y 2 son 4');
// 	});
// });