/* Mathametical Operators 
Addition = +    --> Concatination
Substraction = -
Multiplication = *
Power = **
Module = %
                          */

let a = "shankar ";     
let b = "Naidu";
let c = a + b ;      // ---> concatination

//console.log(c);

let A = 5;
let B = 10;
let C = A + B ;     // ---> Addition

//console.log(C);

let d = 77;
let e = 23;
let f = d ** e;     // Power

//console.log(f);

let D = C + f;  
let E = A * d;
let F = B ** e;

//console.log(D);
//console.log(E);
//console.log(F);

// Increment --> ++                    // decrement --> --
// pre increment, post increment       // pre decrement, post decrement 

let AB = 10;
let AC = 20;
let BC = ++ AB + 2;    // pre increment

console.log(BC);

let BA = 30;
let BD = 15;
let BE = BD ++ + 2;    // post increment

//console.log(BE);

/* Comparision Operators 
Greater than -->  > 
Less than  -->  < 
Greater then equal to  -->  >=
Less then equal to  -->  <= 
Equal too  -->   ==   
Not Equal too   */

let i = 18;
let j = 10;
let k = i > j;

//console.log(k);

let l = i >= j ;
let m = j == i ;

//console.log(l);
//console.log(m);

// Incrementing  ++ ;

let x = 5 ;
x++;
let z = x ;

console.log(z);

// Decrementing -- ;

let y = 12;
y--;
let q = y ;

console.log(q);

// Exponentiation  ** ; or Math.pow(x,y);

let MN = 4 ;
let OP = MN ** 2 ;

console.log(OP);

// Operator Procedence!

/*operator procedence describes the order in which the operations
 are performed in an airthmetic expression  */

 let xy = 100 + 50 * 3;
                             // In this case first multiplication after that addition will takes place!
 console.log(xy);

 /* Multiplication (*) and divison (/) have higher precedence than addition and subtraction ;
   when using parentheses the operations inside the parentheses are computed first! */

let yx  = (109+87) * 2 ;
console.log(yx);

