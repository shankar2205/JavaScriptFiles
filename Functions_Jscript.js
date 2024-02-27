/* --------- Functions in Javascript-------- */
// it is a set of statements that take inputs, do some computation ,
// and produce output;

/*Syntax : function FunctionName (p1,p2,p3){
    // code to be executed.
}
let xy = FunctionName(arg1,arg2,arg3)
console.log (xy); */

// Example : 01

function FirtFunction (a,b,c){            // Function block; declaring the function 
    console.log(a+b*c);
}
var x = FirtFunction(2,8,5);          // function invoking;

console.log(x);

// Example : 02 

function SecFunction (a,b){
    return a*b ;                        // by using return keyword we can stop the executing after the return output; 
}
var x = SecFunction(10,23);

console.log(x);

// Function can be defined by using an expression,it can be stored in a variable;

const xy = function(a,b) {return a+b};
let z = xy(3,5);
console.log(z);

/* Hoisting is JS default behaviour of moving declarations to the 
top of the current scope; coze of this, js functions can be declared before 
they are declared; */ 

let yx = myFunction(2,9);         // declaring function call before function declaration ;

function myFunction(a,b){
    return a*b+a;
}
console.log(yx);

// Self-invoking functions ;
/*Functions expressions can be made "Self-Invoikng"
function expressions will execute automatically if the expression is followed by ();
you have to add () around the function to indicte that it is a function expression; */

function myFun02(a,b){
    return a*b;
}
let zy = myFun02(3,5);
console.log(zy);

// functions are objects ;
/*The type of operator in js returns "function" for functions
Js functions have both properties and methods;
The arguments.length property returns the no.of arguments received 
when the function was invoked; */

function myFun03(a,b){
    return arguments.length              // it will returns how many arguments we passed;
}
console.log(myFun03(2,5));

// ------------- JS Function Parameters ------------
/* function FunctionName(p1,p2,p3,p4){
    // code to be executed;
} 
Function parameters are names listed in the function defintion
function arguments are the values passed to the function;*/ 

function myFun04 (x,y){
    if (y===undefined){        
        y = 3;
    }
    return x*y ;
}
let zxy = myFun04(8);
console.log(zxy);

// default parameter values ;

function myFun05(x,y=10){              // passing arguments in parameters ;
    return x + y ;
}
let xyz = myFun05(2);
console.log(xyz);

// function rest parameter ;
function sum (...args){
    let sum = 0;
    for (let arg of args)
    sum += arg;
    return sum;
}

let xp = sum(4,5,67,3,546,10);
console.log(xp);

// The arguments object;
/* Js functions have built-in object called the arguments object;
The arguments object contains an array of the arguments used when 
the function was called; */

function findMax(){
    let max = -Infinity;
    for(let i=0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
let result = findMax(1,5,9,3);
console.log(result);

// The this keyword in JavaScript ;
/* the this keyword refers to an object,depending upon the how it is used,
when a function is called without an owner object, thw value of
this becomes the global object; */

let pq = myFun05(23,56);
function myFun05(x,y){
    return this;
}
//console.log(pq);

// invoking a function as a method, in js you can define functions as object methods;

var myObject = {
    firstName : "Shankar",
    lastName : "Naidu",
    age : 23,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
let result01 = myObject.fullName();
console.log(result01);

// Invokaing a function with a function constructor ;
// if a function invokation is proceeded with the new keyword,
// it is a constructor invokation;

function myFun06 (arg1,arg2){
    this.firstName = arg1;
    this.lastName = arg2;
}

var myObject = new myFun06("Javascript","Functions");

let res01 = myObject.firstName;
let res02 = myObject.lastName;
console.log(res01);
console.log(res02);

/* Js function call();
with the call() method,you can write a method that can be used 
on different objects; */

const person = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
              
}
const person01 = {
    firstName : "Mark",
    lastName : "Juckerburg"
}

const person02 = {
    firstName : "Tim",
    lastName : "Cook"
}
                                                       // accessing properties from different objects 
let Result02 = person.fullName.call(person01);
console.log(Result02);
let Result03 = person.fullName.call(person02);
console.log(Result03)

// The call() method with arguments ; thi methid can accept arguments;

const person03 = {
    fullName : function(city,country){
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
const person04 = {
    firstName : "Shankar",
    lastName : "Naidu"
}
let Result05 = person03.fullName.call(person04,"Hyderabad","India");
console.log(Result05);

// Javascript function apply(); it is similar to call() method,
let Result06 = person03.fullName.apply(person04,["Hyd","Ind"]);
console.log(Result06);
// in this method takes arguments as an array,

// Function borrowing; with the bind() method,
// an object can borrow a method from another object;

const myTeam = {
    firstName : "Royal Challengars",
    lastName : "Benguluru",
    fullName : function (){
        return this.firstName + " " + this.lastName;
    }
}

const player01 = {
    firstName : "Virat",
    lastName : "Kohli"
}

const player02 = {
    firstName : "faf",
    lastName : "duplessis"
}

let player01Name = myTeam.fullName.bind(player01);
console.log(player01Name());                            // fullName() to call the function;

let player02Name = myTeam.fullName.bind(player02);
console.log(player02Name());

// Javascript Global & Local variables ;
/* A Function can access all variables inside the function block,
is called as local variable.it can be used only inside the function.
A function can access variables defined outside the function,is called as 
global varibales,it is defined outside the function it can be used by
all scripts.
when variables created without a declaration keyword(var,let & const)
are always global variables even if they are created inside the function.*/

// Local Variable;
function myFun07() {
    let a = 3;           // varible defined inside the function;
    return a + a ;
}

// Global Variable;
function myFun08() {
    return a + a ;
}                         // variable defined outside the function;
let a = 4 ;

function myFun09() {
    a = 5;
}                          // it is also a global variable 
myFun09 ();
return a + a ;

