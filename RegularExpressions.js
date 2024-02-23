/* A Regular Exp is a sequence of characters that forms a search pattern,
this pattern can be used for text search and replace operations.
Syntax : /pattern/modifier;
 */
/* /w3schools/;
   pattern (to be used in a search) 
   Using string methods ; --> search(), replace() */

// The search method ;   

let text = "JavaScript Regular Expressions!";
let Res = text.search(/javascript/i);                  // it returns the position of the string, the i in used for case sensitive strings//

console.log(Res);

let Num = text.search(/regular/i);

console.log(Num);

let Num01 = text.search(/Expressions/i);

//console.log(Num01);


// using string replace() with string ;

let text01 = "Go to JavaScript Reg Exp!";
let Res01 = text01.replace('Reg','Regular');        // its used for replacing the one string with other string ;

//console.log(Res01);

// Using regular expression for replacing strings

let text02 = "Go to JavaScript Reg Exps!";
let Res02 = text02.replace(/reg/i,'Regular');

//console.log(Res02);

/* Modifiers --> Used for perform case - insensitive global searches;
i --> performs case - insensitive matching;
g --> Performs a global match (find all);
m --> performs multiline matching;
d --> performs start & end matching;*/

// Multiline matching ---> "m" ;

let text03 = "/nIs th/nIs it?";
let Res03 = text03.match(/nIs/m);
//console.log(Res03);

/* Regular Expression patterns; --> brackets are used to find a range of characters;
1.[abc] --> find any of the characters between the brackets;*/

let text04 = "Is this all there Is";
let result = text04.match(/[h]/g);

//console.log(result);
//console.log(text04.match(/[s]/g));

/*
2.[0-9] --> find any of numbers between the brackets;*/

let Num02 = "1234567890";
let result01 = Num02.match(/[1-6]/g);      //mentioning the specified number range in brackets [];
//console.log(result01);


/*
3.[x|y] --> find any of alternatives separated with | ;*/

let words = "red,re,green,grn,yellow,yel,blue,bu";
let result02 = words.match(/(yellow|blue)/);
//console.log(result02);


/* Metacharacters --> These characters with special meaning 
1. \d --> find a digit*/

let digit = "its 108979%";
let result03 = digit.match(/\d/g);         // it returns the all digits in the string ; 
//console.log(result03);


/*
2. \s --> finds a white space characters;
*/

let text05 = "Is this all there is ohh";
let result04 = text05.match(/\s/g);         // it returns the no of spaces in the total string ;
//console.log(result04);

/*
3. \b --> finds a match at the beginning of a word or at the end of a word;*/

let result05 = text02.match(/\bReg/);     // it returns the position of the specified word;
//console.log(result05);

//console.log(text02.match(/JavaScript\b/));  

//Using regular expressions object ; --> it is a object with predefined properties and methods ;
//using test(); --> it searches a string for a pattern & returns true or false ;
//search the string 'e' in the given below string ;

const pattern01 = /e/;
let result06 = pattern01.test("the best things in the life are free!");
//console.log(result06);

const pattern02 = /te/;
let result07 = pattern02.test("that time i saw your eyes i fell in love with you te-->ju");
//console.log(result07);

//using exec(); --> it searches a string with specified pattern, returns the found text as a object  ;

let Res04 = pattern02.exec("that time i saw your eyes i fell in love with you te-->ju");
console.log(Res04);

// it returns specified string position also

