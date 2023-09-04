// creamos fx que retorne suma entre dos valores
const xy = (x, y) => {
    x = 2
    y = 3
    return x + y
}

// creamos ffx que retorne verdadero si el valor de las variables es estrictamente igual
const condicional = (x,y) => {
   if(x===2 && y===3){
    return true
   }
   return false
 } 
console.log(xy())
console.log(condicional(2,3))
console.log('hellor world!')

// A variable is a symbolic name for a value.
// Variables are declared with the let keyword:
let x; // Declare a variable named x.

// JavaScript supports several types of values
x = 1; // Numbers.
x = 0.01; // Numbers can be integers or reals.
x = "hello world"; // Strings of text in quotation marks.
x = 'JavaScript'; // Single quote marks also delimit strings.
x = true; // A Boolean value.
x = false; // The other Boolean value.
x = null; // Null is a special value that means "no value."
x = undefined; // Undefined is another special value like null.

console.log(x) //x = last value.

// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = { // Objects are enclosed in curly braces.
topic: "JavaScript", // The property "topic" has value "JavaScript."
edition: 7 // The property "edition" has value 7
}; // The curly brace marks the end of the object.
// Access the properties of an object with . or []:
book.topic // => "JavaScript"
book["edition"] // => 7: another way to access property values.
book.author = "Flanagan"; // Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.
// Conditionally access properties with ?. (ES2020):
book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property.
// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0] // => 2: the first element (index 0) of the array.
primes.length // => 4: how many elements in the array.
primes[primes.length-1] // => 7: the last element of the array.
primes[4] = 9; // Add a new element by assignment.
primes[4] = 11; // Or alter an existing element by assignment.
let empty = []; // [] is an empty array with no elements.
empty.length // => 0
// Arrays and objects can hold other arrays and objects:
let points = [ // An array with 2 elements.
{x: 0, y: 0}, // Each element is an object.
{x: 1, y: 1}
];
console.log(points[points.length-1]) //{x: 1, y: 1}: the las element from the array of objects
let data = { // An object with 2 properties
trial1: [[1,2], [3,4]], // The value of each property is an array.
trial2: [[2,3], [4,5]] // The elements of the arrays are arrays.
};
console.log(data.trial1[data.trial1.length-1]) //[3,4]: the las element from the array of arrays
