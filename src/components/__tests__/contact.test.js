// import { render, screen } from "@testing-library/react";
// import Contact from "../Contact";
// import "@testing-library/jest-dom";

// test("to test the contact page", () => {
//   render(<Contact />);
//   const heading = screen.getByRole("heading");
//   // assertion
//   expect(heading).toBeInTheDocument();
  
// });

// test("to test button is exist on document", () => {
//     render(<Contact />)
//     const button = screen.getByRole("button");
//     expect(button).toBeInTheDocument();
// })

// it("to test input boxes", () => {
//     render(<Contact/>)
//     const inputBoxes = screen.getAllByRole("textbox");  // this input gives us an array which is react element
//     console.log(inputBoxes.length)
//     expect(inputBoxes.length).toBe(3)
//     expect(inputBoxes.length).not.toBe(4)   // adding not condition

// })