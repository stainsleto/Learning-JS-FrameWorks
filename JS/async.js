console.log(" I ")

console.log(" eat ")

setTimeout( () => {
    console.log(" ice cream ")     // Async
},4000)

console.log(" with a ")

console.log(" spoon ")


// calling a function inside another function is call back 

function one(){
    console.log(" step 1 ")
}

function two(){
    console.log(" step 2 ")
}

one();
two();