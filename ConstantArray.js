/* The const keyword doesn't define a constant value.
it defines a constant reference to a value!
With this keyword you can't reassign a const value,Array,Object.
but you can change the elements of const array,Object! */

// CONSTANT ARRAYS.

const Cars = ["KIA","AUDI","BENZ","TATA"]        // Created An Array with const Keyword.

console.log(Cars);
console.log(typeof(Cars));                       // when we chcek the typof variable it shows Object!

Cars.push("Toyota");                            // we can add the Values to Array
Cars[3] = "Morris";                            // we can change the value or replace!

console.log(Cars);

Cars.pop("AUDI");                              // we can remove the last added value by using pop command!

console.log(Cars);

const Vehicle = ["Car","Bike","Cycle","Truck","Auto","Van"];
Vehicle.push("Ship");
console.log(Vehicle);

Vehicle[2] = "EV Cycle";

console.log(Vehicle);

Vehicle.pop();
console.log(Vehicle);

/* we can't reassign the const Array*/