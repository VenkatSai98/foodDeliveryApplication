import { sum } from "../Sum";
import {jest} from '@jest/globals';

// test("to test the sum of two numbers", () => {
//   const result = Sum(3, 7);
//   expect(result).toBe(10)
// });


test('add function', () => {
  // Spy on the add function
  const addSpy = jest.spyOn(sum, 'sum');
  
  // Call the add function
  const result = sum(2, 3);
  
  // Assertions
  expect(result).toBe(5);
  expect(addSpy).toHaveBeenCalled(); // Check if the function has been called
  expect(addSpy).toHaveBeenCalledWith(2, 3); // Check if the function has been called with specific arguments
  
  // Restore the original function
  addSpy.mockRestore();
});
