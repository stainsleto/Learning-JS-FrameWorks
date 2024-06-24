const x:number = 1;

console.log(x)

function greet(firstName : string, age:number){
    console.log("Hello" +firstName)
}

greet("Stains", 10)

function sumOne(a :number, b:number) {    //TS is type inferance as it will automatically detect the return type
    return a+b;
}


function sum(a :number, b:number): number {    //explicitly defining the return type
    return a+b;
}

const valueOne = sumOne(1,2)

const value = sum(1,2)

console.log(value)

function isLegal(age:number): boolean{
    if(age > 18){
        return true
    }
    return false
}

let y  = isLegal(20)   //now y knows it's a boolean as function returns a boolean


function runAfter1S(fn : ()=>  void){  // as function returns nothing it's void, if it returns a number make it as () => number
    setTimeout(fn, 1000)
}

runAfter1S( ()=> {
    console.log("Inner Function")
})

//Interface

interface User{    // dont need ' = 'sign
    firstName : string,
    lastName : string,
    age:number,
    email? :string    //optional when ? is used
}


function isLegal2(user: User): boolean {
    if(user.age > 18 ) {
        return true;
    }
    else{
        return false;
    }
}

function greet2(user: User){
    console.log("Hi there" + user.firstName)
}

isLegal2({
    firstName : "Stains",
    lastName : "leto",
    age:23
})


//type 

type GreetArg = number | string                 //needs an '=' sign 

// can't have multiple types in interface but can have in type

function greet3( id: (number | string)){   // can do like this also
    console.log("Hello" + id)
}

function greet4(id :GreetArg){
    console.log("Hello" + id)
}

greet3(1)
greet3('1')

greet4(1)
greet4('1')


//multiple types and interfaces can be added to a single type but interfaces can't be added to interfaces

type Employee = {
    name : string,
    startDate : Date
}

interface Manager {
    name : string,
    defartment : string
}

type TechLead = Employee & Manager


const t: TechLead = {
    name: "Stains",
    startDate: new Date(),
    defartment: "I.T"
}


//array

type NumberArr = number[]       // can be done with `type` but can't be done with `interface`

function maxValue(arr: NumberArr){       // or arr: number[]
    let max = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
}

maxValue([1,2,3,4])

//enums --> mentioning constants in human readable form

enum Direction {       // use enum when there is limited set of constant values
    Up,                // Up = 0, Down = 1, Left = 2, Right = 3 ( this is how enum converts this to js )
    Down,
    Left,
    Right
}

enum Direction1 {       
    Up = "up",                // we can force enum to explicitly assign values
    Down = "down",
    Left = "left",
    Right = "right"
}

function doSomething(keyPressed: Direction){
    if(keyPressed === Direction.Up){
        console.log("Up")
    }

}

doSomething(Direction.Up)
doSomething(Direction.Right)
doSomething(Direction.Down)



//generics  --> language independent concept exist in c++ as well

// for example if an array got both array and number and use type something like 

//problem 

type Anything = number  | string

function problem(arr: Anything []){
    return arr[0];
}


let output = problem(["stains", "mault"])   

output.toUpperCase()   // this will give an error as it's a number as well, that's where generic comes in


//simple solution 

 function identity<T>(arg: T){
        return arg;
 }

let output1 = identity<string>("myString")
let output2 = identity<number>(1)

output1.toUpperCase()   // this will work as it's a string

// original Solution


function getFirstElement<T>( arr: T[]) {
    return arr[0]
}

const el = getFirstElement(["stains", "mault",1,2])  // now the User can send different types of values in inputs, without any type errors

// exporting and importing using TS

//exporting 
import express from "express" // this can be done in backend now

const a = 1;

export {a}   // exporting a also the default export works





 
