/*Strings are for storing text! */
let TextString = "JavaScriptStrings";

// find length of the string by using String Length ----> length

let StrLength = TextString.length;
console.log(StrLength);

let StrText = "Java Script Strings!";

let LenText = StrText.length;

console.log(LenText);

// ------- Escape Characters -------
/* we use escape characters to add quotes in the strings */
let text12 = "we are the so-called \"Vikings\" from the North";
console.log(text12);

let text13 = " it\'s Alright....!";
console.log(text13);

let text14 = " it\s' Java Script \"Strings\" Concept....!"
console.log(text14);

let textLen14 = text14.length;
console.log(textLen14);

// ------- Template Strings ---------
/* Templates are strings enclosed in back-ticks (`) */
 
let TextTemplate =          /* The back-ticks Allows the multiline Strings it's called as Template Strings...! */
`The quick 
brown fox 
jumps over 
the lazy dog!`

console.log(TextTemplate);

let MultiLineString = 
`It's Multiline
Strings used
for Multi lines 
in Web Develpoment
and More.....!`

console.log(MultiLineString);

/* ------- Js Strings as Objects ------ */

/* Normally, JS Strings are primitive values, created from Literals! 
But strings can also defined as objects with Keyword new :*/

let y = new String ("It's String Object!");
console.log(typeof(y));
// -------- comparing String & String objects --------

let xy = "Virat";               // string
let yx = new String ("Kohli");  // object

let xz = (xy == yx);               /* It's returns False, comparing two JS objects always returns False! */
let zx = (xy === yx);

console.log(xz);
console.log(zx);

console.log(typeof(xy));
console.log(typeof(yx));

/* ------- Javascript String Methods--------- */
// All string methods produces a new string without altering the original string.

// String CharAt();    it returns the character at specified index position.

let StrMethod1 = "Hello World!";
let StrChar = StrMethod1.charAt(6);

console.log(StrChar);

// String charCodeAt();      it returns unique code of specific character in a string!(UTF-16 code [0 - 65535] )

let StrMethod2 = "It's Java Script \"Methods\" using Vs Code...!";    
let StrChar2  = StrMethod2.charCodeAt(10);                      

console.log(StrChar2);

// Extracting String Parts....!
// Js String slice();
 
const Name = "JavaScript,String,Methods";        // Extracts a part of a string & returns the extracted part in a new string! //
let LetterName = Name.slice(11,18); 
let Nametxt = Name.slice(20);            // returns the rest of the string from char 20...

console.log(LetterName);
console.log(Nametxt);

let part01 = Name.slice(-12,-6);     // it returns the strings in negative direction from ending - starting
console.log(part01);

let part02 = Name.slice(-10);          // it returns rest of the strings from ending to start
console.log(part02);

// Js string substring();  /* it's similar to slice method ,
/* diff is start & end values lessthen 0 are treated as 0 in substring();*/

let part03 = Name.substring(10,0);
console.log(part03); 

//  ------- CONVERTNG STRINGS TO UPPER & LOWER CASE ---------

// ---> Syntax ---> toUpperCase();
// ---> Syntax ---> toLowerCase();

let Text02 = "Hello \"shankar.\" its JavaScript...!"
let Text03 = Text02.toUpperCase();
console.log(Text03);

let Text04 = Text03.toLowerCase();
console.log(Text04);

// String Concatination ---> concat();

let text01 = "Hiii";
let text05 = "ShankaR";
let text07 = text01.concat(" ",text05);               // String concatination using concat() method!
let text08 = text01.concat(" ",Text03);

console.log(text07);
console.log(text08);

//  ----- JS String trim(); it removes the white space from the both sides of a string;

// -------Js String Padding  ----------- padstart & padend;

let text = "5";
let padded = text.padStart(4,"S");     // it fills given string character in specified range of index, from starting.

console.log(padded);

let padend = text.padEnd(5,"0");    // from ending.

console.log(padend);


