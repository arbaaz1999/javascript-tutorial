// Javascript tutorials
// Array Methods

// 1. Array Length Property

/* let arr = [1,2,3,4,5,6]
arr.length = 4
console.log(arr) */

// 2. Array.push() method
// This method INSERT elements at the LAST INDEX of the array
const rgb = ["red", "green", "blue"];
const cmyk = ["c", "m", "y", "k"];
rgb.push(...cmyk); //Element to add should pass in the parameter

console.log(rgb);

// 3. Array.pop() Method
// This method DELETE an element from LAST INDEX of the Array

const newRgb = [...rgb];
newRgb.pop(); // it does not take any parameter
console.log(newRgb);

// 4. Array.unshift() Method
// This method INSERT ELEMENTS at 0TH INDEX of the Array

let numbers = [30, 40];
let number = [10, 20];
const length = numbers.unshift(...number); // by using spread operator we insert element of another array to an array
console.log({ length });
console.log({ numbers });

// 5. Array.shift() Method
// This method is used to DELETE AN ELEMENT from 0TH INDEX of Array

const numbersCopy = [...numbers];
numbersCopy.shift();

console.log(numbersCopy);

// 6. Array.splice() Method
// This method is used to Manipulate Elements of an Array

const colors = ["laal", "hara", "neela"];
colors.splice(1, 0, "kaala", "peela");

console.log(colors);

// 7. Array.slice() Method
// This method is used to copy a portion of an array without modifying the source array

const days = ["s", "s", "m", "t", "w", "t", "f"];

const weekend = days.slice(0, 2);

console.log(weekend);

// 8. Array.indexOf() and .lastIndexOf() Method
// Locating an element of an array

console.log(days.indexOf("t")); // output - 3  | .indexOf() method search from left to right

// while

console.log(days.lastIndexOf("t")); // output - 5 | .lastIndexOf() methods search from right to left

// 9. Array.includes() Method
// This method checks whether the element is there in the array or not e.g.

console.log(days.includes("s")); // it will return true as it includes

console.log(days.includes("d")); // it will return false as it does not

// 10. Array.find((e, i, arr) => {}) Method
// This method is used to search for the first occurance of an element that satisfy test.

let customers = [
  {
    name: "ABC Inc",
    credit: 100,
  },
  {
    name: "ACME Corp",
    credit: 200,
  },
  {
    name: "IoT AG",
    credit: 300,
  },
];

console.log(
  customers.find((e) => {
    return e.credit > 100;
  })
);
