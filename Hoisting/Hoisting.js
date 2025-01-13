//Hoisting

function Sample1(){
    a = 1;// it doesnt have a declaration ryt? ruko zara  
    let b = 2;
}

Sample1()

console.log(a) // 1
console.log(b) // error:b is not defined

//why do we get this error but didnt get any error for a.

//that is because a is declared by the compiler using var keyword which is its default behaivour
// the b is block scoped and the value can only be accessed inside the function.

//this is how js runs it.
var a; // added by compiler

function Sample2(){
    a = 1;
    let b = 2;
    console.log(b) // 2
}

Sample2()

console.log(a) // 1
 
