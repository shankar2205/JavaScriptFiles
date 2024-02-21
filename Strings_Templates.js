/*String templates or Template strings or template literals */

// --------Back - tics Syntax-------

// Template strings use back - tics (` `) rather then quotes (" ") to define a string.

let Text = `Hello World!`;
console.log(Text);

// Quotes Inside Strings 
/* Template strings allow both single and double quotes 
inside a string!*/

let Text01 = `This      // This is Multiline String template!
is Java Script
Using VS Code
Editer!`
console.log(Text01);

// ------ String Interpolation -------- 
// Template string provide an easy way to interpolate variables 
// and Expressions into Strings.

/* The Syntax is $ {......} */

/* Automatic replacing of variable with
 real values is called String Interpolation */

 /*-----------Variable Substitutions------- */
 // template strings allow variables in strings.

 let FirstName = "John";    //declaring variables 
 let LastName  = "Doe";

 let text = `Welocome ${FirstName}, ${LastName}`;    // Using string template ---> expression substitution !
 console.log(text);

 let price = 10;                                             // Expressions Substitution!
 let VAT = 0.25;
 const Total = `Total : ${(price * (1+VAT)).toFixed(2)}`;
 console.log(Total);

 let speed = 200;
 let time = 12.9;
 let distance = `The distance travelled by Train is ${speed * time}km.`;

 console.log(distance);

let mass = "120";
let gravity = "10";
const Weight = `The Weight of the boject = ${mass*gravity}kg`;

console.log(Weight);

/*HTML Templates */

let Header = "Template";
let tags = ["Templte strings", "Java Script","CS6"];
let html = `<h2>$ {header}</h2><ul>`;
for (const x of tags){
    html += `<li>${x}</li>`; 
}
html += `<lu>`;

console.log(html);

