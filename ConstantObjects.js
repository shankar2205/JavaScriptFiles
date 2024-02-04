/* You can change the Properties of const Object,
   You Can add & Change the property of object but 
   you can't reassign the const Object.*/


const Laptop = {Type : "Gaming",            // we have created a objct with Key,value Pairs!
                Model : "NoteBook",
                Color : "Blue",
                Size : "8GB"};
                console.log(Laptop);

//console.log(Laptop.Model);

Laptop.Size = "16GB";                       // Changing the properties of the object!
Laptop.Color = "White";

//console.log(Laptop);

Laptop.Graphic_Card = "INVIDA 4GB";         // Adding new elements to Object!
Laptop.Screen_Size = "14 Inch";

//console.log(Laptop);

// BLOCK SCOPE -->  const & let ;

/* Declaring a variable with const is similar 
to let, when it comes to Block Scope!*/

const X = 1703;
console.log(X);           // Here X is 1703

{
    const X = 2205;
    console.log(X);       // Here X is 2205
}

console.log(X);           // Here X is 1703

// Same as const , let keyword also same in Block Scope!

let Y = "Aug 05";
console.log(Y);           // Y is Aug 05;

{
    let Y = "Nov 23"
    console.log(Y);       // In the Block of code Y is changed into Nov 23;
}

console.log(Y);           // Out of the Block code Y remains same as first declare variable;

// BLOCK SCOPE --> var ;

/* In the Code of block the var keyword is opposite to the 
const and let keywords*/

var Z = "Garvitational Force";
console.log(Z);                       // Here Z is "Gravitational Force"

{
    var Z = "No Gravity";
    console.log(Z);                   // Here in the block of code Z is changed to "No Gravity"

}

console.log(Z);                       /* Here Z is changed to "No Gravity" its taken reference from the 
                                        latest added variable data as final output for outside the block also. */

