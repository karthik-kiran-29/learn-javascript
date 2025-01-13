// JavaScript Variable Declaration Methods
var globalVar = 1;        // Old way, globally scoped
let blockVar = 'hello';   // Modern way, block scoped
const constVar = 0;       // Constant, cannot be reassigned

// Demonstrating scope differences
var x = 1;
let y = 2;
{
    var x = 3;  // Changes global x
    let y = 4;  // Different y, block-scoped
    console.log(x, y);  // 3, 4
}
console.log(x, y);  // 3, 2

// Const with objects
const obj = {
    prop: "value"
};
obj.prop = "new value";   // Valid - object properties can be modified
console.log(obj);         // { prop: "new value" }

// This would throw error:
// const obj = {}; // Cannot reassign const