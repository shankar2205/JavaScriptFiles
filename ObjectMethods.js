/*Methods are actions that can be performed on objects!
Methods are stored in properties as function definitions.*/

// A method is a function stored as a property !

// ------ creating a Object -----

const ObjectName = {
    FirstName : "Shankar",
    LastName : "Bhavani",
    Age : 23,
    Height : "5.6 Inches",
   EyeColor : "Black",
   Id : 2205,
   FullName : function() {                               //Creating a finction for accessing the object properties is called as a method!
    return this.FirstName + " " + this.LastName;
   }
};

result = ObjectName;
console.log(result);

console.log(ObjectName.FullName());

result2 = ObjectName.FullName();                     // for printing the object methods use objectName.FunctionName(); Paranthesis is must!

