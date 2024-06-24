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
// can't have multiple types in interface but can have in type
function greet3(id) {
    console.log("Hello" + id);
}
function greet4(id) {
    console.log("Hello" + id);
}
greet3(1);
greet3('1');
greet4(1);
greet4('1');
const t = {
    name: "Stains",
    startDate: new Date(),
    defartment: "I.T"
};
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
}
maxValue([1, 2, 3, 4]);
//enums --> mentioning constants in human readable form
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {}));
function doSomething(keyPressed) {
    if (keyPressed === Direction.Up) {
        console.log("Up");
    }
}
doSomething(Direction.Up);
doSomething(Direction.Right);
doSomething(Direction.Down);
//generics  --> language independent concept exist in c++ as well
