// for...in with Objects
const declaration = {
    name: "red",
    number: 5,
    type: "color"
};

// Iterating over object keys
console.log("Object Keys:");
for (let key in declaration) {
    console.log(key);             // name, number, type
}

// Iterating over object values
console.log("\nObject Values:");
for (let key in declaration) {
    console.log(declaration[key]); // red, 5, color
}

// for...in with Arrays
const arrayData = [1, 'javascript', 2, 'sudden'];

// Iterating over array indices
console.log("\nArray Indices:");
for (let index in arrayData) {
    console.log(index);           // 0, 1, 2, 3
}

// Iterating over array values
console.log("\nArray Values:");
for (let index in arrayData) {
    console.log(arrayData[index]); // 1, 'javascript', 2, 'sudden'
}

// Note: Better alternatives for arrays
console.log("\nBetter ways to iterate arrays:");

// Using for...of (recommended for arrays)
for (let value of arrayData) {
    console.log(value);
}

// Using forEach
arrayData.forEach((value, index) => {
    console.log(`Index ${index}: ${value}`);
});