// JavaScript statements include conditionals and loops using the syntax
// of C, C++, Java, and other languages.
function abs(x) { // A function to compute the absolute value.
    if (x >= 0) { // The if statement...
        return x; // executes this code if the comparison is true.
    } // This is the end of the if clause.
    else { // The optional else clause executes its code if
        return -x; // the comparison is false.
    } // Curly braces optional when 1 statement per clause.
} // Note return statements nested inside if/else.
abs(-10) === abs(10) // => true
console.log(true + true === 2 ? true : false) //true:2 es el resultado de js al interpretar booleanos como true=1 y false = 0
console.log(false + false === 0 ? true : false) //true: 0 es el resultado de js al interpretar booleanos junto a un operador y convierte los valores de true=1 y false=0 
let array = [2, 3, 5, 7, 11];
function sum(array) { // Compute the sum of the elements of an array
    let sum = 0; // Start with an initial sum of 0.
    for (let x of array) { // Loop over array, assigning each element to x.
        sum += x; // Add the element value to the sum.
        console.log(array)
    } // This is the end of the loop.
    return sum; // Return the sum.
}
console.log(sum(array)) //28: return the sum between elements from array
// sum(primes) // => 28: sum of the first 5 primes 2+3+5+7+11
function factorial(n) { // A function to compute factorials
    let product = 1; // Start with a product of 1
    while (n > 1) { // Repeat statements in {} while expr in () is true
        product *= n; // Shortcut for product = product * n;
        n--; // Shortcut for n = n - 1
    } // End of loop
    return product; // Return the product
}
factorial(4) // => 24: 1*4*3*2
console.log(factorial(4))   //24:el resultado de n que se multiplica el loop por producto y luego decrece n hasta no cumplir la condicion.
function factorial2(n) { // Another version using a different loop
    let i, product = 1; // Start with 1
    for (i = 2; i <= n; i++) // Automatically increment i from 2 up to n
        product *= i; // Do this each time. {} not needed for 1-line loops
    return product; // Return the factorial
}
factorial2(5) // => 120: 1*2*3*4*5
console.log(factorial2(5))
console.log(24 * 5)   //120: el resultado de n multiplica su valor en el loop con i que dentro del for vale 2 hasta n y ejecuta la mulpitlicacion de producto por cada iteracion hasta llegar a 5 de forma que incrementa.
