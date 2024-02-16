// JavaSCript Sets; 
/*Set is a collection of unique values each value can 
only occur once in a set;*/

// to Create a set ;  --> Passing an array to new set(),
// create a new set and use add() to add values in a set;

// The new set() method ;

const createSet = new Set(["Ab","Bc","Cd","De","Ef"]);

//console.log(createSet);             // created a set by passing an array ;

const Set01 = new Set();

Set01.add("Apple");               // created a set by adding values to the set ;
Set01.add("Pears");
Set01.add("Oranges");
Set01.add("Banana");

//console.log(Set01);

// creaing a set by adding variables to set ;

const Set02 = new Set();

// creating variables 

const fruit = "Apple";
const color = "Red";
const taste = "Sweet";
const weight = "70g";

// adding variables to set (); by using Set.add() method

Set02.add(fruit);
Set02.add(color);
Set02.add(taste);
Set02.add(weight);

//console.log(Set02);

// The forEach() method ; This method invokes a function for each set element;

let text = " ";
Set02.forEach(function(value){
    text += value + " ";
})

//console.log(text);

// The value () method ; this method returns a new 
//iterator object containing all the values in a set;

Set01.values();
//console.log(Set01);

let texts = " ";
for (const x of Set01.values()){      // iterating maps by using value method;
    texts += x + " ";
}
//console.log(texts);

/* JavaScript Maps ; --> Maps holds a key - value pairs 
where the keys can be any datatype. */

// A Map remembers the original insertion order of the keys ;

// creating a Map --> passing a array to new Map(),
// create a map and use Map.set();

const Particulars = new Map([
    ["Cars",1987998],
    ["Bikes",2345],
    ["Ships",8776],
    ["Planes",34657],
    ["cycles",879]
]);

console.log(Particulars);


// The set() method --> we can add elements to map;

const Dogs = new Map();       // created a Map

Dogs.set("Pugs",500);         // Adding values to Map ;
Dogs.set("Husky",300);
Dogs.set("Pomeranian",400);
Dogs.set("ShihTzu",200);
Dogs.set("Chihuahua",100);

//console.log(Dogs);

// The set() method also used for change the element existinv values;

Dogs.set("Chihuahua",250);           // changed the value 

console.log(Dogs);

// The get() method --> gets the value in a map;

let MapGet = Dogs.get("Pugs");      // returns Pugs --> value 

console.log(MapGet);

// The Size property; --> returns the number of elements in a map ;

let MapSize = Dogs.size;
console.log(MapSize);           // returns 5 

// The delete () method ;   --> its removes a map elememt ;

Particulars.delete("cycles");
let MapSze = Particulars.size;
console.log(MapSze);

// The has () method ;  --> returns true if a specified key exists in a map; 

let mapFind = Particulars.has("Cars");
console.log(mapFind);

// The forEach Method (); This method calls a function for each key/value pair in a map;

let textss = " ";

Dogs.forEach(function(value,key){
    textss += key + " = " + value + " ";

})

console.log(textss);

// The entries() method ; --> This method returns an
// iterator object with the [key,value] in a map;

let text01 = " ";
for (const x of Dogs.entries()){
    text01 += x + " ";
}
console.log(text01);
