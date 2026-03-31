// how to create a function in js

function myFirstFunc() {
  return "hello world";
} // function declaration

let message = myFirstFunc(); // function involcation
console.log({ message });

// how to pass parameters to function

function addTwoNumbers(a, b) {
  return a + b;
}
let sum = addTwoNumbers(5, 6);
console.log({ sum });

// function, return, curly braces, parenthesis - [-- if not error --]

function multiplyTwoNumbers(a, b) {
  let c = a * b;
  return c;
}

let mul = multiplyTwoNumbers(5, 6);
console.log({ mul });
