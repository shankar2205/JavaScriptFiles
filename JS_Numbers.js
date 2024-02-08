/* JS has only one type of numbers can be written with or with out decimals. */

let num = 3233;           // with out decimals
let deci =  22.17;             // with decimals

// Extra large or Extra small numbers are written with scientific (Exponent) notation!

let ExtraLarge = 123e5;      // ----> 12300000
let ExtraSmall = 123e-5;     // ----> 0.00123

//console.log(ExtraLarge);
//console.log(ExtraSmall);

// In Js Numbers don't have any other types like integers,float,long etc...

//  ------- Integer Precision -------- integers are accurate upto 15 digits. 

let int = 999999999999999;      // ----> 15 digits
let intPres = 9999999999999999;    // -----> 16 digits
// after 15 digits JS will consider as round figure values ans will be laskhs or crores
//console.log(int);
//console.log(intPres);

// -------- Floating Precision -----------
/* Floating point airthmetic is not always 100 % Accurate!*/

let floatAirth = 0.2 + 0.1 ;              // output ----> 0.300...04
let floatPres = (0.2*10 + 0.1*10)/10;       // output -----> 0.3

//console.log(floatAirth);
//console.log(floatPres);

// if we add a string and number it will be string concatenation!
let  x = 10;
let y = 20;
let total = "The Result is : " + x + y ; // output is 1020, here string + Number is added it consider as concatenation! 

//console.log(total);

let X = 211;
let Y = 112;
let Z = "321";           // The Z string will consider as concatenation!

let Result = X + Y + Z ;      // JS Interpreter works from left to right 
                              //it will added first  x + y then result will be added to z;
//console.log(Result);

/*The NaN is Java script reserved word indicating that 
a number is not a number(NaN); */
//if we trying to do airthmetic operations with non - numeric string it will result in NaN;

let NanNum = 100/"Apple";
//console.log(NanNum);         // its returns NaN;

notnan = isNaN(NanNum);       // isNan keyword used for checking if number is NaN ;
//console.log(notnan);       

//console.log(typeof(NanNum));    // ----> NaN is the data type of Number

let x1 = 20;
let y1 = NaN;

let xy = (x1 + y1);
//console.log(xy);      // it will return NaN;

// ----- JS Hexadecimal Numbers -------!
/*Javascript interprets numeric constants as hexadecimals if they are preceded by 0x */
let Hex = 0xff;    // it will return constant value --> 255;

//console.log(Hex);

let Hexad = 0x3435464564ff;    // it will return a hexadecimal number!
//console.log(Hexad);

/* ------ JS Numbers as objects ------*/

// Max safe integer 

let Max = Number.MAX_SAFE_INTEGER;

let Min = Number.MIN_SAFE_INTEGER;

console.log(Max);     // it returns global value of max safe integer
console.log(Min);     // it returns global value of min safe integer

// toPrecision;
/* It returns a string with a number written with a specified length! */

let XY = 9.656;
console.log(XY.toPrecision(2));     
console.log(XY.toPrecision(4));

console.log(XY.toPrecision(10));

/*Epsilon is the diff b/w the smallest floating point number & greater than 1 and 1 */

let Es = Number.EPSILON;

console.log(Es);

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

