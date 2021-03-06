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
    return e.credit == 100;
  })
);

// 11. Array.findIndex() Method
// This method is similar to the find() method, difference is just it returns the immediate first index of the element for which the condition is truthy.
// And find() method returns the element itself.

console.log(customers.findIndex((e) => {
  return e.credit > 200
}))  // it returns 2 i.e. the element is located at 2nd index.

// 12. Array.map() method
// This method performs operation on every element of the array and returns a new array with updated elements e.g. : -

const circleRadius = [4, 6, 8, 10]

const circleArea = circleRadius.map((radius) => {
  return Math.floor(Math.PI * (radius ** 2))
})

console.table({ circleRadius, circleArea }) // it returns [4, 6, 8, 10] and??[50, 113, 201, 314]

// 12. Array.filter() Method
// This method returns new array of all the elements for which the fucntion returns true e.g.:-

console.table(circleArea.filter(area => area > 200)) // it returns [201, 314]

// 13. Array.reduce() Method
// This method performs operation on elements of the array and reduces it to 1 value e.g.:-

let shoppingCart = [
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
];

let totalPrice = shoppingCart.reduce((prevValue, currValue) => {
  return Number(prevValue + currValue.qty * currValue.price)
}, [0])

console.log(totalPrice)

// 14. Similarly Array.reduceRight() Method
// This performs the operation on elements from right to left while .reduce() method left to right.

// 15. Array.every() Mehtod
// This method check the condition for every element of the array for e.g.:-
// In the below example we check whether every element is Odd or not.

let nums = [1, 3, 5, 10, 12]

let isOdd = nums.every(n => {
  return Math.abs(n % 2) === 1
})

console.log(isOdd) // this will return false because every element is not Odd number

// 16. Array.some() Method
// This method check if atleast one element pass the condition. Same example, let's check if some elements are even or not.

let isEven = nums.some(n => {
  return Math.abs(n % 2) == 0
})

console.log(isEven) // will return true because some elements are Even in the array

// 17. Array.sort() Method
// This method is used to sort elements either in ascending or descending order

let employees = [
  { name: 'John', salary: 90000, hireDate: "July 1, 2015" },
  { name: 'David', salary: 75000, hireDate: "August 15, 2012" },
  { name: 'Ana', salary: 80000, hireDate: "December 12, 2015" }
];

/* let sortBySalary = employees.sort((a, b) => {
  return a.salary - b.salary
}) */

/* let sortByName = employees.sort((a, b) => {
  let x = a.name.toUpperCase(), y = b.name.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
}) */

let sortByDate = employees.sort((a, b) => {
  let x = new Date(a.hireDate), y = new Date(b.hireDate)
  return x - y
})

// console.log('Sort by Salary', sortBySalary);
// console.table(sortByName)
console.table(sortByDate)

/* employees.forEach((e) => {
  document.getElementById("tbody").innerHTML = `<tr>
  <td>${e.name}</td>
  <td>${e.salary}</td>
  <td>${e.hireDate}</td>
  <tr>`
}) */

// 18. Array.forEach() Method
// This method perform task on every element of the array and modify the source array, this method is similar to for loop but cannot use break or continue statement.


// 19. Array.concat() Method
// This method is used to merge two arrays without changing the source array for e.g.:-

let upper  = ['A','B','C'];
let lower  = ['a','b','c'];
let digits = [1,2,3];

let alphaNumeric = upper.concat(lower, digits)

console.log(alphaNumeric)

// 20. Array.of() Methods introduced in ES6.
// This method creates an array with the elements which has been passed in the arguments irrespective of their datatypes.

let num = Array.of(3)
console.log(num) // this creates an array of size 1 and the element is 3

let alphabets = Array.of('a', 'b', 'c')
console.log(alphabets)  // this creates an array of size three ['a', 'b', 'c']

// 21. Array.from() Method
// This method is used to convert array-like object into array.
 
let arr = Array.from([1,2,3], x => x + 1)

console.log(arr)

// 22. Array.flat() Method
// This method is used to flatten nested arrays

const numb = [1, 2, 3, [4, 5, 6], 7, 8, 9];

/* const flattenedNumb = numb.flat(Infinity)

console.log(flattenedNumb) */

// 23. Array.flatMap() Method
// This method is used to perform the operation on each element and flatten them as well, for e.g.:-

const numbFlatMaped = numb.flatMap((x) => x * 2)
console.log(numbFlatMaped)

// Multidimensional Array

let activities = [
  ['Work', 9],
  ['Eat', 1],
  ['Commute', 2],
  ['Play Game', 1],
  ['Sleep', 7]
];

// we can also manipulate multidimensional array by .push() and .splice() methods

activities.push(['Programming', 2])
activities.splice(2, 0, ['Sleep', 1])

console.table(activities);

// Array.join() Method
// This method is used to convert the array into string by using separator for e.g.:-

const cssClasses = ['btn', 'btn-primary', 'btn-active'];
const classes = cssClasses.join(',')  // comma in the bracket is called a separator

console.log(classes)

// ES6 Destructuring Assignment
