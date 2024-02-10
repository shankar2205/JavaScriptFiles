/*------- JavaScript Arrays-------*/

const Cars = ['Saab','Volvo','Huyndai','Benz'];       // creating an Array in single line!

const Fruits = [
    'Mango',
    'Avacado',
    'Blackberry',                                  // Creating an array in multiline!
    'Watermeloon',
    'Banana'
];

const Colors = [];                                 // creating an array after declaring the Empty array adding elements into array!
Colors[0] = 'Green';
Colors[1] = 'Blue';
Colors[2] = 'Alive Green';
Colors[3] = 'Yellow';
Colors[4] = 'Voilet';

//console.log(Cars);
//console.log(Fruits);
//console.log(Colors);

//console.log(typeof(Cars));     // Its return as object data type!

/* --------- Accessing Array Elements ----------*/
// Array elements can be accessed by referring to the Index number!

let Color01 = Colors[3];
//console.log(Color01);

let Color02 = Colors[2];
//console.log(Color02);

// Changing Array elements 

Cars[0] = 'KIA';
//console.log(Cars);       // It replaces kia value with 0 index value;

Cars[3] = 'Morris Garrage';
//console.log(Cars);     

let Newcars = Cars       // Coping all elements in the array to Variable!

//console.log(Newcars);
//console.log(typeof(Newcars));
//console.log(Cars);

// Arrays as data type of object but methods and properties are different !

/* 1.length  --> It returns the number of elements in the array! */

let len = Cars.length;
//console.log(len);   // --> output : 4

// Accessing the first array and Last array//

let fruit = Fruits[0];       // it returns first element of the array;

let fruits = Fruits[Fruits.length -1];       // it returns the last element of the array;

//console.log(fruit);
//console.log(fruits);

//-------- Adding Array elements ---------

// push() Method ;   this method used to add a new element to the array!

Fruits.push('Lemon');     // It adds new element at end of the array list;

//console.log(Fruits);

//console.log(Fruits.length);

Fruits[Fruits.length] = 'Kiwi';      // we can add elements by using length method;

//console.log(Fruits);

/* to check whether array is or not!*/

// 1. Array.isArray();
// 2. instanceof

let checkArray = Array.isArray(Cars);           // it returns the whole array and returns true if is array!
//console.log(checkArray);

let ArrayCheck = Fruits instanceof Array ;

//console.log(ArrayCheck);                       // it returns true if variable is Array!

/* --------- Java Script Array Methods ---------- */
// at();  --> this method uses for accessing the specified element in array!

let Fruit01 = Fruits.at(2);
//console.log(Fruit01);                  // it returns second index element!

let Fruit02 = Fruits[2];                      // we can also use [ ] this method to print values!
//console.log(Fruit02);

// join();    ---> Joins all array elements into a string ;

NewArray = Fruits.join(" * ");
//console.log(NewArray);                // it returns new string with specified string value!

ArrayJoin = Cars.join(" & + ")
//console.log(ArrayJoin);

// pop();  ---> removes the last element from an array;

let Fruit03 = Fruits.pop();  
//console.log(Fruits);

//shift();    --> Removes the first array element and shifts all other elements to lower index;

let ShiftArray = Fruits.shift();
//console.log(ShiftArray);

//console.log(Fruits);

//unshift();   --> Adds a new element to an array (at beginning), and unshifts older elements;

let Fruit04 = Fruits.unshift("Lemon");

//console.log(Fruit04);

//concat (); this method creates a new array by merging the existing arrays!

const Array_Join = Cars.concat(Fruits);      // Joining two arrays
//console.log(Array_Join);                  

const Arrays_Joining = Colors.concat(Cars,Fruits);         // Joining three arrays
//console.log(Arrays_Joining);

// Merging an array with values out side the array ;
const array01 = [10,20,30,40,];
const array02 = array01.concat("SpiderMan");
//console.log(array01);
//console.log(array02);

//copywithin(); --> this Method copies array elements to another position in same array!

let fruit05 = Fruits.copyWithin(5,1);
//console.log(fruit05);


// flattening an array  ---> its used for decreasing the size of the Array!
// flat();      its decrease the array dimension and return the all elements in single array!

const Array03 = [[1,2],[3,4],[5,6]];        // three dimensional array ---> one dimensional array

const Array04 = Array03.flat();
//console.log(Array03);
//console.log(Array04);

// splice ();   --> used for adding new items to an existing array position
Colors.splice(2,0,"Pink","Black");     // 2 - index position, 0 - no.of elements to remove, " ", " "
//console.log(Colors);

Colors.splice(0,1);         // it removes first element and adds 0 elements in the array!
//console.log(Colors);

// slice ();    --> its slice out the part of array into new array !

let Color03 = Colors.slice(2);       // it removes 0 and 1st index values because we given index 2 in argument!
//console.log(Color03);

let Color04 = Colors.slice(0,2);     // it removes elements from 2 to rest of array!
//console.log(Color04);

// indexof();  this method searches an array for an element and returns it's position ;
//console.log(Fruits);
let FindInd = Fruits.indexOf("Banana")+1;
//console.log(FindInd);

// includes(); this allows us to check if an element is present in an array;
let FindInc = Cars.includes("Volvo");
//console.log(FindInc);

let Findelement = Fruits.includes('Apple');
//console.log(Findelement);

// find(); findindex(); this method returns the value of the array element that passes a test function;

const numbers = [4,9,16,25,29];
let First = numbers.find(myFunction);
function myFunction(value,index,array){
    return value > 18 ;
}

funs = myFunction()
//console.log(funs);

// findLast(); this method finds the element from start from the end of array;

let NumFind = numbers.findLast(
    x => x > 20 );
//console.log(NumFind);

let NumFind02 = numbers.find(
    x => x > 10 
);

//console.log(NumFind02);

// ------  JavaScript Sorting Array  -------
// sort();   --> A-Z

console.log(Colors);

let SortArray = Colors.sort();
//console.log(SortArray);

// reverse();   --> Z-A

let RevrseArray = Colors.reverse();
//console.log(RevrseArray);

// toSorted();  --> its returns new array after sorting !

let SortArray02 = Colors.toSorted();
//console.log(SortArray02);

// toReversed(); --> Its returns new array keeping original Array unchanged!

//console.log(Fruits.toReversed());

/* -------- Sorting Object Arrays -------- */

const CarsNew = [
    {type : "Benz", year : 2016},
    {type : "Swift", year : 2018},
    {type : "Toyota", year : 2014},
    {type : "KIA", year : 2019},
];

console.log(CarsNew);

NewSort = CarsNew.sort(function(a,b){
    return a.year - b.year});

console.log(NewSort);



