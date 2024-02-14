//------ Conditional Statements ----------
/* These are used to execute different actions 
based on different conditions*/
// if statement ;

let Age = 23;

if (Age > 18){                                       // if condition 
    //console.log("You are an Adult");            // block of code to be executed if condtion is true;
}

let Country = "India";
let Currency = 10 ; 

if (Country == "India" && Currency >= 5){          // using logical and  operator and equal to ;
    //console.log("You will get Id Card!");
}

// if else statement ;

let Age01 = 17 ;

if (Age01 > 18){                            // if condition is true it will print "Adult";
    //console.log("Adult");
}
else {
    //console.log("Minor");                    // If condition is false it will print the code in else block ;
}


let NameLen  = 8;
let NameVar = "Shankar";

if (NameLen <= 7 && NameVar == "Shankar"){
    //console.log("User Id Matched.")
}
else {
    //console.log("Invalid user Id.")
}

// else if statement ;

let User_Id = 30;

if (User_Id >= 50){                               // if condition block true its execute code block otherwise
    //console.log("Admin User Found....")
}
else if (User_Id <= 50){                                 // else if conditon block will be executed if this block is also flase then
    //console.log("Accounts User Found......")
}
else {
    //console.log("Enter a Valid User Id.")                          // else condition block is printed 
}



//Switch Case Statement ; --- > it's used to execute a block of code on the value of expression ; 


let Value = true;

switch (typeof Value) {
    case "number" :
        console.log("Number data type")
        break ;
    case "string" :
        console.log("String data type")
        break ;
    case "boolean" :
        console.log("Boolean data type")
        break ;
    case "bigint" :
        console.log("Bigint data type")
        break ;
    default :
        console.log("Other")
        break ;
}            


let dayName = 7 ;

switch (dayName) {
    case 1 :
        dayName = "Monday" ;
        break ;
    case 2 :
        dayName = "Tuesday" ;
        break ;
    case 3 :
        dayName = "Wednesday" ;
        break ;
    case 4 :
        dayName = "Thursday" ;
        break ;
    case 5 :
        dayName = "Friday" ;
        break ;
    case 6 :
        dayName = "Saturday" ;
        break ;
    case 7 :
        dayName = "Sunday" ;
        break ;    
    default :
        dayName = "Invalid dayName!"
        break ;    
}

//console.log("The dayName is : " + dayName) ;


// Ternary operator ;

/* Syntax : condition ? value_if_true : Value_if_false */

let age = 20 ;
let msg = (age >= 18) ? "Adult" : "Minor";
//console.log(msg);

// ---------- JavaScript Loops ----------- in programming loops are used to repeat a block of code!

// for loop 

for (let i = 1 ; i <= 5 ; i++){
    //console.log("Code Executed.")
}

for (let i = 2 ; i <= 6 ; i++){
    //console.log(i);
}

// Looping through Arrays----->

let Coding = ["JavaScript","Python","C++"]

for (let i = 0 ; i < Coding.length ; i++){
    //console.log(Coding[i]);
}

// Nested Loops through Arrays ------>

for (let i = 1 ; i <= 3 ; i++){
    //console.log(i);
    for (let j = 1 ; j <=3 ; j++){
        //console.log("Inner Loop " + j);
    }
}

/* while Loop ----> syntax : 
while(condition){
    //code to be executed ;
} */

// print numbers 0 - 10 ;

let i = 0 ;
while (i <= 5){
    //console.log(i);
    i++ ;
}

// do while Loop ----->

// print numbers 1 - 5 ;

let Ai = 1;

do{
    //console.log(Ai)
    Ai++
}while (Ai <= 5);

// break statement ---- used for terminate the loop at specified iteration!

for (let a = 1 ; a <= 8 ; a++){
    if(a == 3){                            // loop will be break at 3 ;
        break ;
    }
    //console.log(a);
}

/* continue statement ------- it used to skip the current iteration of the 
loop and control flow of the program goes to the next iteration: */

for (let b = 1 ; b <= 8 ; b++){
    if (b == 4){                         // it skips the 4 and prints remaining values;
        continue;
    }
    //console.log(b);
}


// examples for ---> if,else and else if ;

let hour = new Date().getHours();

if (hour < 24) {
    greeting = "Good day!";
}
//console.log(greeting);


if (hour < 20) {
    greeting = "Good Day!";
}else {
    greeting = "Good Evening!";
}

console.log(greeting);



const time = new Date().getHours();
let greetings;

if (time < 10) {
    greetings = "Good Morning!";
}else if (time < 20) {
    greetings = "Good Day!";
}else{
    greetings = "Good Afternoon!";
}
console.log(greetings);

// default Keyword ; --> the default keyword specifies the code to run if there is no case match ;

/*Common code blocks;
some times you will want different switch cases to use the same code; */ 

switch (new Date().getDay()){
    case 4 :
    case 5 :
        text = "Soon it is weekend!";
        break;
    case 6 :
    case 7 :
        text = "it is weekend!";
        break;
    default:
        text = "Looking for weekend!";                     
}

console.log(text);

// Switch case --> examples ; if no matching cases are found,the program continues to the default label;
let x  = "0";
switch (x) {
    case 0 :
        text = "Off";
        break;
    case 1 :
        text = "On";
    default :
        text = "No Value found!";        
}
console.log(text);

//Array looping ;

const Cars = ["Volvo","Saab","Ford","Audi","KIA"];
let text01 = " ";

for (let i = 0; i < Cars.length; i++) {
    text01 += Cars[i]
}
console.log(text01);

