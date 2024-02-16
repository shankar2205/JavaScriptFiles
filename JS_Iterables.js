// iterating over a string ;

const name01 = "Shankar";
let text = " ";

for (const x of name01 ){     // for (Var of iterable)
    text += x + " ";
}
console.log(text);

// iterating over a Array ;

let texts = " ";

let letters = ["Diploma","Inter","iiiT","ItI","APRJC"];

for (let x of letters){
    texts += x + " ";
}
console.log(texts);

// iterating over a set ;

const newSet = new Set(['Bike','Car','Plane','Ship','Meraine']);
let txt = " ";

for (const x of newSet){
    txt += x + " ";
}
console.log(txt);

// iterating over a map ;         // map contains key - value pairs ;

let txtss = " ";
const fruits = new Map([
["Apples",456],
["Bananas",350],  
["oranges",109],
["Pears",123]]
);

for (const x of fruits){
    txtss += x + " ";
}
console.log(txtss);
