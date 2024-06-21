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
 
