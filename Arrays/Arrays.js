// Array Creation and Basic Manipulation
const colors = ['green', 'red', 'orange'];
console.log(colors);                    // ['green', 'red', 'orange']

// Modifying Elements
colors[0] = 'blue';                     // Direct assignment
console.log(colors.length);             // 3

// Adding & Removing Elements
colors.push('brown');                   // Add to end
colors.unshift('purple');               // Add to start
colors.pop();                           // Remove from end
colors.shift();                         // Remove from start

// Higher-Order Array Methods

// 1. map() - transforms each element
const products = ['biscuit', 'coins', 'blanket'];
const productSold = products.map(item => item + ' sold');
console.log(productSold);               // ['biscuit sold', 'coins sold', 'blanket sold']

// 2. filter() - creates new array with elements that pass test
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const highNumbers = numbers.filter(num => num > 7);
console.log(highNumbers);               // [8, 9, 10]

// More Useful Array Methods
const fruits = ['apple', 'banana', 'orange'];

// forEach - iterate over array
fruits.forEach(fruit => console.log(fruit));

// find - get first element that matches condition
const found = numbers.find(num => num > 5);
console.log(found);                     // 6

// includes - check if array contains value
console.log(fruits.includes('apple'));  // true

// join - convert array to string
console.log(fruits.join(', '));         // 'apple, banana, orange'

// Note: Array methods like map(), filter() don't modify 
// the original array - they return a new array