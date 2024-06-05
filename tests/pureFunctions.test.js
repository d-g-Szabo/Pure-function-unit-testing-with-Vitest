// I am going to write tests for my pure functions
// destructuring --> import one or more elements form one location
// with destructuring, we import the specific elements that we want to use

import { expect, describe, test } from "vitest";
// import my add function
import { add, subtract, multiply, divide } from "./pureFunctions.js";

test("add", function () {
  const myArguments = add(2, 3);
  const expected = 5;

  expect(myArguments).toBe(expected); // I am comparing the values I gave it as arguments to the expected result
  // I expect 2 + 3 to be 5
});

test("subtract", function () {
  const myArguments = subtract(5, 3);
  const expected = 2;

  expect(myArguments).toBe(expected); // I am comparing the values I gave it as arguments to the expected result
});

test("multiply", function () {
  const myArguments = multiply(2, 3);
  const expected = 6;

  expect(myArguments).toBe(expected); // I am comparing the values I gave it as arguments to the expected result
});

test("divide", function () {
  const myArguments = divide(6, 3);
  const expected = 2;

  expect(myArguments).toBe(expected); // I am comparing the values I gave it as arguments to the expected result
});
