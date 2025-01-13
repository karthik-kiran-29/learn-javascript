/*
 * Closure Definition:
 * A closure is a function that has access to variables in its outer (enclosing) scope,
 * even after the outer function has returned. It "closes over" variables in its scope.
 * Think of it as a function bundled together with its surrounding state.
 */

// Basic Closure Example
function makeFunc() {
    const name = "karthik";
    function displayName() {
        console.log(name);  // Accesses name from outer scope
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();  // Outputs: karthik

// Practical Closure Example
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.getCount());   // 1

// Closure with Parameters
function makeMultiplier(factor) {
    return (number) => number * factor;
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15