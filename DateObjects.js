const date = new Date();        // it returns current date in UTC format
//console.log(date);

const date01 = new Date("2019-08-05");         // its returns the specified date!
//console.log(date01);

// --- Creating Date Objects -----

const date03 = new Date("October 13, 2014 11:13:00");       // new date (date String)
//console.log(date03);

const date04 = new Date("2019,august");          // creating date with year,month
//console.log(date04);

const date05 = new Date("2019,august,05");       // creating date with year,month,day
//console.log(date05);

const date06 = new Date(2018,11,24,10,33,30,0);       // creating date with 7 requirements  
//console.log(date06);

// ---- Previous Century -----

const date07 = new Date(99,11,24);           // one and two digit years will be interpreted as 19xx ; 1999 ---> 99
//console.log(date07);

// JS stores dates as number of milliseconds since january 01, 1970; 
// zero time is january 01, 1970 00:00:00 UTC ;

// ----- Displaying dates(); -------

const date08 = new Date();
const date09 = date.toString();          // it returns date format to more readable format!
//console.log(date09);

const date10 = date08.toString();
//console.log(date10);

const date11 = date08.toUTCString();          // it returns date format in UTC;
//console.log (date11);

const date12 = date.toISOString();          // it returns date format in ISO;
//console.log(date12);

// Javascript date formats;

// 1.ISO Date;   ---> Internatonal standard time;    (YYYY-MM-DD)
const date13 = new Date("2015-03-25");
//console.log(date13);

const d01 = new Date("2019-08");              // year,month
//console.log(d01);

const d02 = new Date("2019-08-05T12:00:00Z");         // iso format;
//console.log(d02);

// 2.Short dates; ----> MM/DD/YYYY;

const d03 = new Date("03/17/2000");
//console.log(d03);

// 3. Long dates; ----> MMM DD YYYY;

const d05 = new Date("march 17 2000");    // output ----> 2000-03-16T18:30:00:000Z ;
//console.log(d05);

// Date input - Parsing dates ;

// 1.Date.parse();    ---> used to convert to milliseconds ;

let msec = Date.parse("march 17,2000");               // it returns milliseconds from january 01 1970 - current date/specified date ;
//console.log(msec);

const d06 = new Date(msec);             // converting milliseconds to date ;
//console.log(d06);

// getFullYear(); method           this method returns the year in full format ex : 2000

const date14 = new Date("2021-03-25");
let d07 = date14.getFullYear();
//console.log(d07);

let d08 = date14.getMonth();
let d09 = date14.getDate();
let d10 = date14.getHours();
let d11 = date14.getMinutes();
let d12 = date14.getSeconds();
let d13 = date14.getMilliseconds();

// Get time zone offset();   this method returns the difference b/w local and UTC time ;
let TimeZone  = date14.getTimezoneOffset();
//console.log(TimeZone);

// Javascript set date methods ;

// 1.setFullYear();

const d14 = new Date();
let d15 = d14.setFullYear(2020);
//console.log(d15);

//----- comparing Dates -------

let text = " ";
const toDay = new Date(2100,1,17);

const someDay = new Date();

someDay.setFullYear(2100,0,17);

if ( someDay > toDay ){
    text = "today is before Jan 14,2100.";
}else {
    text = "today is after Jan 14,2100.";
}

console.log(toDay);
console.log(text);


