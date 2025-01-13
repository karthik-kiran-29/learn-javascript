let text = 'hello world';

// Basic string operations
console.log(text);                    // 'hello world'
console.log(text.length);             // 11
console.log(text.charAt(7));          // 'o' - character at index 7

// Case manipulation
console.log(text.toLowerCase());      // 'hello world'
console.log(text.toUpperCase());      // 'HELLO WORLD'

// String extraction
console.log(text.substring(5, 8));    // ' wo' - chars from index 5 to 7

// Search methods
console.log(text.indexOf('w'));       // 6 - first occurrence
console.log(text.lastIndexOf('w'));   // 6 - last occurrence

// Replacement
console.log(text.replace('world', 'india')); // 'hello india'

// String to array
console.log(text.split(' '));         // ['hello', 'world']

// Remove whitespace
console.log(text.trim());             // 'hello world' (removes start/end spaces)

// Original string remains unchanged
console.log(text);                    // 'hello world'