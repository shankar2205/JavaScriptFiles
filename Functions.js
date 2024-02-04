/* A Java Script function is a code designed to perform a particular task.
function is executed when somethng invokes it */

// Function to compute the Product of P1 & P2 ;

function myFunction (P1,P2) {
    return P1 * P2 ;
}
                                   // Passing the parameters in Arguments!
//Result = myFunction(10,20);
//console.log(Result);

// Passing the values in Parameters 

let x = myFunction(23,89);

function myFunction(a,b) {

    return a + b;
}

console.log(x);

// The () operator used for invokes the function 

// Convert Fahrenheit to celcius;

function toCelcius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let value = toCelcius(77);

console.log(value);


// ----- Local Variables -----

/* Variables declared with in the function, become local to the function!*/

