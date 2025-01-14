// Basic Object Creation and Manipulation
const person = {
    firstName: "Karthik Kiran",
    lastName: "R",
    age: 18,
    isStudent: true
};

// Accessing and Modifying Properties
console.log(person.firstName);          // Karthik Kiran
person.age = 19;                        // Update property
delete person.isStudent;                // Remove property

// Object Operations
console.log("firstName" in person);     // true - check property existence
console.log(Object.keys(person));       // ['firstName', 'lastName', 'age']
console.log(Object.values(person));     // ['Karthik Kiran', 'R', 19]
console.log(Object.entries(person));    // [['firstName', 'Karthik Kiran'], ...]

// 'this' Keyword Example
function createCharacter(name) {
    return {
        name,
        greet() {
            console.log(`${this.name} hola amigos.`);
        },
        // Arrow function example - 'this' behaves differently
        greetArrow: () => {
            console.log(`${this.name} hola amigos.`); // 'this' won't work here
        }
    };
}

const ganesh = createCharacter("ganesh");
ganesh.greet();                         // ganesh hola amigos.

// Prototypes
// Modern way using Object.create()
const character = {
    attack() {
        console.log(`${this.name} swings!`);
    }
};

const fighter = Object.create(character);
fighter.name = "hulk";
fighter.attack();                       // hulk swings!

// Class-based alternative (modern approach)
class Character {
    constructor(name) {
        this.name = name;
    }
    
    attack() {
        console.log(`${this.name} swings!`);
    }
}

const warrior = new Character("Thor");
warrior.attack();                       // Thor swings!