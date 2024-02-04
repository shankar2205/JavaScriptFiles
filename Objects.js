/* Objects are variables too, but objects can contain many values.*/

const Person = {
    firstName :"John",
    lastName :"doe",
         Age : 25,
         Color : "White",
         Native : "Indian"};

console.log(Person);         

// The name:values pairs in Javascript objects are called properties.

/* Here properties are :          Property Values to be :
FirstName                          Jhon
lastName                           doe
Age                                25
Color                              White
Native                             Indian                          */

//  ------ Accessing Object Properties ---------
/* we can access properties in 2 ways  
1--->   objectName.propertyName
2--->   objectName["propertyName"]    */

Result = Person.lastName;
console.log(Result);
result = Person["lastName"];
console.log(result);
