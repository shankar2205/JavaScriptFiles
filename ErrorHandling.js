/* Try and Catch, finally, throw... */
// Try and Catch --> The try statement defines a code block to run (to try);
// catch --> The catch statement defines a code block to handle any error;

try{
    //console.log(x);      // in this code block we are trying to access undefined variable; 
}
catch(error){
    //console.log(error);     // In this block it will catch the error and it returns the type of error;
}
//console.log("You Reached end of code!");

// Now we are adding finally block ;

try{
    //console.log(y);
}
catch(error){
    //console.log(error);
}
finally{                         // The finally block used for if we expect the error before and we want to print the code;
    //console.log("This will always execute irrespective of errors!");
}
//console.log("You Reached End of the Code!");

// Examples for Error Handling in JS;

/* Typers of errors in JavaScript--> 
1---> Range Error ; If you use a number that is outside the range of legal values! */

let Num = 1;
try{
    Num.toPrecision(500);      // Argument must be between 1 & 100 ; other it will be range error;
}
catch(error){
    //console.log(error);
}

/*2--> Reference Error ; if you use a variable with out delcaration it could be reference error */

let x = 10;
try{
    x = y + 1;           // y is not defined 
}
catch(error){
    //console.log(error);
}

/*3---> Syntax Error ; if you try to evaluate code with a syntax error; like paranthesis..etc */
try{
    eval("alert('hello)");
}
catch(error){
    //console.log(error);
}

/*4---> Type error ; if an argument is incompatible with the type expected by an operator or function;*/

let Number01 = 100;

try{
    Number01.toUpperCase();
}
catch(error){
    //console.log(error);
}

/* ------> Arrow Function <-------- */
// if you have parameters you can pass them inside the parenthesses;

let Hello = " ";
Hello = (val) => "Hello " + val ;        // using arrow function 
let ArrowFun = Hello("Universe!");              // passing arguments 
//console.log(ArrowFun);

let FunArrow = " ";
FunArrow = (val) => "JavaScript " + val ;
let Example02 = FunArrow("Arrow Functions!");
//console.log(Example02);

// ------- JAVA SCRIPT CLASSES ----------
/* Use the keyword class to create a class.
always add a method constructor(); */

/* syntax : class className {
    constructor(){......}
}
*/

class Car {                           // Created a class;
    constructor(name,year){
        this.year = year;
        this.name = name;
    }
}

const myCar01 = new Car("Ford",2023);          // created a object to access the class properties;
const myCar02 = new Car("KIA",2022);

//console.log(myCar01.name);
//console.log(myCar02);


class Fruits {
    constructor(name,taste){
        this.name = name;
        this.taste = taste;
    }
}

const ClassFruits01 = new Fruits("Apple","Sweet");
const ClassFruits02 = new Fruits("Grape","Bitter");

//console.log(ClassFruits01);
//console.log(ClassFruits02.name);

// --------- CLASS METHODS --------

/*Syntax : class className {
    constructor {..........}
    method_01(){...........}
    method_02(){...........}
    method_03(){...........}
} */

class Cars {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age (){
        const date = new Date();
        return date.getFullYear()-this.year;
    }
}

const myCar03 = new Cars ("Morris Garage",2015);
console.log("My Car is " + myCar03.age() + " years old");

