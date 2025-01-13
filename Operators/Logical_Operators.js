// Using OR (||) - returns first truthy value or last falsy value
function greet(name) {
    console.log('welcome,', name || "visitor!");
}

// Using AND (&&) - returns first falsy value or last truthy value
function greet2(name) {
    console.log('welcome,', name && "visitor!");
}

// Examples
greet("karthik");     // welcome, karthik
greet();             // welcome, visitor!

greet2("karthik");    // welcome, visitor!
greet2();            // welcome, undefined

// Modern alternative using default parameters:
function greet3(name = "visitor") {
    console.log('welcome,', name);
}