"use strict";
const x = 1;
console.log(x);
function greet(firstName, age) {
    console.log("Hello" + firstName);
}
greet("Stains", 10);
function sumOne(a, b) {
    return a + b;
}
function sum(a, b) {
    return a + b;
}
const valueOne = sumOne(1, 2);
const value = sum(1, 2);
console.log(value);
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
let y = isLegal(20); //now y knows it's a boolean as function returns a boolean
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
runAfter1S(() => {
    console.log("Inner Function");
});
function isLegal2(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet2(user) {
    console.log("Hi there" + user.firstName);
}
isLegal2({
    firstName: "Stains",
    lastName: "leto",
    age: 23
});
