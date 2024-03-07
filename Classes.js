// ----- Javascript Classes -------;
// use the keyword class method named constructor ();

//class className {
//    constructor() {...}
//}

class Cars {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}
const myCar01 = new Cars ("KIA",2022);
const myCar02 = new Cars ("Audi",2020);
//console.log(myCar01.year);

//console.log(myCar02.name);

// The constructor method ;
// it is executed automatically when a new object is created,
// it is used to initialize object properties;

/* Class inheritance ; to create a class inheritance use the extends keyword;
A class created with a class inheritance inherits all the methods from 
another class; */

class Vehicle {
    constructor(brand){
        this.carName = brand ;
    }
    present (){
        return 'i have a ' + this.carName;
        }
}
class Model extends Vehicle {
    constructor(brand,Mod){
        super(brand);
        this.Model = Mod; 
    }
    show() {
        return this.present() + ', it is a ' + this.Model;
    }
}

let myCar = new Model("ford","Mustang");
let ResMycar = myCar.show();
//console.log(ResMycar);

// The super () method refers to the parent class. by calling the super () method in the constructor method,
// we call parents constructor method and gets access to the parents properties & methods.

class Animal {
    alive = true;
    eat (){
        console.log(`This ${this.name} is eating`);
    }
    sleep (){
        console.log(`This ${this.name} is sleeping`);

    }
}

class Rabbit extends Animal {
    name = "rabbit";
}
class Fish extends Animal {
    name = "fish";
}
class Hawk extends Animal {
    name = "hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();

const hawk = new Hawk();
//console.log(rabbit.alive);
//console.log(rabbit.eat());
//console.log(rabbit.sleep());

//console.log(fish.alive);
//console.log(fish.eat());
//console.log(fish.sleep());

let StdObj = {
    name : "Lisa",
    marks : 78,
    display(){
        console.log("Name : ", this.name);
        console.log("Marks : ", this.marks);
    }
};

let Stud01 = Object.create(StdObj);
//Stud01.display();
 
// Let override the name and marks ;

Stud01.name = "Johny";
Stud01.marks = '90';

//Stud01.display();

//Sequence control --> sometimes you would like to have better control over
// when to execute a function;

// calculating the sum pf two numbers ;

function myDisplayer(some) {
    console.log(some);
}

function myCalculator(Num1,Num2){
    let sum = Num1 + Num2 ;
    return sum ;
}

let Result = myCalculator(5,5);
//myDisplayer(Result);

// setTimeout(); when using js function you can specify a call back function to be
// executed on time - out;

//setTimeout(myFun,3000);

function myFun(){
    //console.log("I Love You!!");
}

// Examples ;

//setTimeout(function()
//{Fun01 ("I Love You!!");},3000);

function Fun01(value){
    //console.log(value);
}
Fun01();

// Waiting for intervals ;
// you can specify a callback function to be executed for each interval;

//setTimeout (myFun02,1000);
function myFun02(){
    let d = new Date();
    //console.log(d.getHours() + ":"+
    d.getMinutes() + ":" +
    d.getSeconds();
}    

// Callback functions in javascript --> 

/* When we are passing one function is an argument to
 another function is known as callback function; */

 function display(Result){
    console.log(Result);
 }

 function add (num1,num2,myCallback){
    let sum = num1 * num2 ;
    myCallback(sum);
 }

 add(10,20,display);

 // Anonymous functions in javascript ;
 let sum = function(x,y){                     // we didn't declared the function name;
    return x + y ;
 }
 console.log(sum(10,23));

// Here we are using self invoking to call the function;
 (
 function(){
    console.log("Hello Peter")
 }
 )();

 // setTimeout() function;

 //setTimeout(function(){
    //console.log("hello world");       // we have added self invoking with setting time to print the result ; 
 //},3000);

 // Recursive functions ;
 // if it's calls its self is called as recursive function;

 /* Syntax :
 function myFunction(){
    if (cindition){
        myFunction();
    }else{
        // stop calling recursion
    }
 }
 muFunction();
  */

 function countDown(num){
    console.log(num);
    num --;
    if(num>=0){
        countDown(num);
    }
 }
 //countDown(10);

// Objects in Javascript ;
// Creating an Object ;

/* Syntax :
const ObjName = {              --> this "key : Value" pair is called as object properties;
    key01 : "Value01",
    key02 : "Value02"
    key03 : "value03"
} 
console.log(ObjName);
*/

// Accessing the object properties ;
/*console.log(ObjName.key1);

  console.log(ObjName["key1"];
  */

//Updating the properties in Object;

// ObjName.key01 = "New Value01";

// Adding new Properties in an Object ;
// ObjName.keyNew = "New Value02" ; 

/* Delete a property in object;

deleteObjName.key01;
*/

// Nested Objects in Javascript;
/* Syntax :

const ObjName = {
    key01 : "Val01",
    key02 : "Val02",
    Key03 : "Val03",
    Key04 : {
        subKey01 : "subVal01",
        subKey02 : "subVal02",
        subKey03 : "subVal03"
    }
} 
console.log(objName.key04.subKey01);*/

const Office = {

    OfficeName : "MylkTree",
    Address : "Banjara Hills",
    WorkingHrs : "8 - Hours",

    WeekOffs : {                                // Nested Objects
        Saturdays :{
            FirstSat : "Not a Weekoff",
            SecondSat : "Its a WeekOff"
        }
    }
    
} 

//console.log(Office);
//console.log(Office.WeekOffs.Saturdays.SecondSat);

// checking the property if is available in object or not ;

//console.log("OfficeName" in Office);    // it returns true or false ;

// Using loops to access properties in the object ;

for(let prop in Office){
    //console.log(prop);                // it will print all keys ;
}

for (let prop in Office){
    //console.log(Office[prop]);       // it will print all values ;
}

// Object Methods ; Creating a function in the object for
// accessing the properties in the same object;
/* Syntax :

const ObjName = {
    Key01 : "Val01",
    Key02 : "Val02",
    Key03 : function(){
        console.log("Message to be printed");
    }   
} 
ObjName.key03;
*/

const Factory = {
    Key01 : "Employes",
    Key02 : "Machines",
    Key03 : function(){              // Method created;
        //console.log("In the Factory is " + this.Key01 + " & " + this.Key02);
    }
}
//Factory.Key03();

// Javascript "this" Keyword;
/* To Access the other properties of an object within a method of the 
same object, we can use "this" keyword. */

const Person = {

    FirstName : "Virat",
    LastName : "Kihli",
    Full_Name : function() {
        return this.FirstName + " " + 
        this.LastName;                          // this keyword refers to Object
    }
}

//console.log(Person.Full_Name());

// Constructor function ;

/*In JS Constructor function is used to
 create objects with same properties; */

 function Student(){
    this.Fname = "Hello",
    this.Name = "World"
 }
 const Student01 = new Student(); 
 const Student02 = new Student();
 //console.log(Student.Student02);

// Passing arguments through constructor function;

function Country(Name,Code){
    this.fName = Name,
    this.lName = Code
}
const FirstCountry = new Country("USA","00252");
const SecondCountry = new Country("AUS","00675");

//console.log(FirstCountry);

// Adding properties & Methods in an Object ;

FirstCountry.place = "New Jersy";
//console.log(FirstCountry.place);
//console.log(Country);

// Adding Method to an Object ;
SecondCountry.greet = function(){
    //console.log("Javascript Classes")
}
SecondCountry.greet();

// Adding method in constructor method ;

function Colors(first,last){
    this.Fname = first,
    this.Lname = last,
    this.FullName = function(){                        // in this line we have added method in the function;
        return this.Fname + " " + this.Lname
    }
}
const color01 = new Colors("White","Green");
const color02 = new Colors("Meroon","Black");

//console.log(color01.FullName());

// Javascript Object Prototype ;

/* A prototype it's self is also another object,
the prototype has it's own prototype, this creates a prototype chain. 
by using prototype function we can add new property in the constructor function.*/

function Persons(Name,color){
    this.fullName = Name,
    this.Looking = color
}
Persons.prototype.Gender = "Male";                         // Adding new property in function using prototype; 

const Person01 = new Persons("Elon Musk","White");
const Person02 = new Persons("Bill Gates","Light White");

//console.log(Persons);
//console.log(Person01);
//console.log(Person01.Gender);

// Adding method using prototype function ;

Persons.prototype.FullName = function(){
    return this.fullName + " " + this.Looking;           // adding method using prototype ;
};

//console.log(Person01.FullName());
//console.log(Person02.FullName());

// Changing Prototype Value : 
// if a prototype value is changed, then all new objects will have the changed property value;
// all the previously created objects will have the previous value;

function Human(){
    this.name = "tim Cook";
}
Human.prototype.age = 25;
const Person03 = new Human();

Human.prototype = {age:52}
const Person04 = new Human();

//console.log(Person03.age);
//console.log(Person04.age);

// Object Destructuring ;
/* it's a feature that allows you to extract the properties of an 
object into variables; 
This can be useful for assigning the properties of an object to variables in
a single statement;
Syntax : 
let {property01 : variable01,
property02 : variable02}=objectName;*/

const Animals = {
    Type : "Pet",
    Name : "Dog"
}
let {Type : Fname,                        // assigning object properties to variables;
    Name : Lname} = Animals;

//console.log(Fname);

// Adding default values to object by destructuring;

let {Type,Name,age=15} = Animals;
//console.log(age);

// Object literal syntax;
let F_Name = "Mark";
let L_Name = "Jberg";

const Legal_Name = {
    F_Name,
    L_Name
}
//console.log(F_Name);

// ------ JAVA SCRIPT CLASSES ------- 

class PersonsEarth {
    constructor(Aname,Aage){               // constructor function with orguments;
        this.Aname = Aname;
        this.Aage = Aage;
    }
}

const Persons01 = new PersonsEarth("Elon Musk",52);
const Persons02 = new PersonsEarth("Trump",70);

//console.log(Persons01.Aname);

// Methods in Javascript Classes ;

class HumonsMars {
    constructor(hName,hAge){              // created constructor function
        this.hName = hName;
        this.hAge = hAge;
    }
    greet() {                             // created greet method inside the constructor function ;
        return "Hello " + this.hName;
    }
    changeName(newName){
        this.changeName = newName;
    }
}

const Marsp01 = new HumonsMars("Neel Amstrong",54);

//console.log(Marsp01.greet());

Marsp01.changeName("Kalpana Chawla");

//console.log(Marsp01.changeName);

// Class inheritance : Using class inheritance , a class can inherit all the methods
// and properties of another class; it allows code reusability; to create class inheritance we use extends key word;

class earthSpace{
    constructor(name){
        this.name = name;
    }
    greet(){
        //console.log("Hello " + this.name);
    }
}    
class Solar extends earthSpace {
    constructor(age){
        super(age);
    }
   
}

const SolarSpace01 = new Solar("Solar Sysytem","Infinite");
//console.log(SolarSpace01.greet());

const SolarSpace02 = new Solar("Mars","2433646");
//console.log(SolarSpace02.greet());


// Method Overriding ;
/* If the parent class and child class has the same method, We will call the method of an object of the
child class, it will override the method or properties of the parent class,
this is called as method or property overriding;
 */

class Moon {
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("Hello " + this.name);
    }
}
class Earth extends Moon {
    greet(){
        console.log("Hello " + this.name);
    }
}

const Space01 = new Earth("Earth2898D");
console.log(Space01.greet());

const Space02 = new Moon("Moon2898D");
console.log(Space02.greet());
