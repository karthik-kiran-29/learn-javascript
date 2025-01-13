//Nullish Coalesing Operator

let result = null;

//we dont want result to be undefined or null

if(result == undefined || result == null ){
    result = 'hello';
}

// instead of writing this we can use nullish operator which will do the exact task

result = result?? 'hello';

console.log(result)


