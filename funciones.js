let y =3
// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) { // Define a function named "plus1" with parameter "x"
return x + 1; // Return a value one larger than the value passed in
} // Functions are enclosed in curly braces
plus1(y) // => 4: y is 3, so this invocation returns 3+1
let square1 = function(x) { // Functions are values and can be assigned to vars
return x * x; // Compute the function's value
}; // Semicolon marks the end of theassignment.
square1(plus1(y)) // => 16: invoke two functions in one expression

console.log(square1(plus1(y)))

const plus2 = x => x + 1; // The input x maps to the output x + 1
const square2 = x => x * x; // The input x maps to the output x * x
plus2(y) // => 4: function invocation isthe same
square2(plus2(y))

console.log(square2(plus2(y)))

let points = [ // An array with 2 elements.
{x: 0, y: 0}, // Each element is an object.
{x: 1, y: 1}
];
// When functions are assigned to the properties of an object, we call
// them "methods." All JavaScript objects (including arrays) have methods:
let a = []; // Create an empty array
a.push(1,2,3); // The push() method adds elements to an array
a.reverse(); // Another method: reverse the order of elements
// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from earlier.
points.dist = function() { // Define a method to compute distance between points
let p1 = this[0]; // First element of array we're invoked on
console.log(p1); //{x: 0, y: 0}: first element
let p2 = this[1]; // Second element of the "this" object
console.log(p2) //{x: 1, y: 1}: second element
let a = p2.x-p1.x; // Difference in x coordinates
console.log(a) //1: the subtraction between 1-0
let b = p2.y-p1.y; // Difference in y coordinates
console.log(b)  //1: the subtraction between 1-0
return Math.sqrt(a*a + // The Pythagorean theorem
b*b); // Math.sqrt() computes the square
root
};
points.dist() // => Math.sqrt(2): distance between our 2 points
console.log(points.dist())  //1.41...: thats the return of 2 square root