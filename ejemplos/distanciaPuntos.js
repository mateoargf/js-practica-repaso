class Point { // By convention, class names are apitalized.
    constructor(x, y) { // Constructor function to initialize new instances.
        this.x = x; // This keyword is the new object being initialized.
        this.y = y; // Store function arguments as object properties.
    } // No return is necessary in constructor functions.
    distance() { // Method to compute distance from origin to point.
        return Math.sqrt( // Return the square root of x² +     y².
            this.x * this.x + // this refers to the Point object on which
            this.y * this.y // the distance method is invoked.
        );
    }
}
// Use the Point() constructor function with "new" to create Point objects
let p = new Point(1, 1); // The geometric point (1,1).
// Now use a method of the Point object p
p.distance() // => Math.SQRT2
console.log(p.distance())   //1.41421...: creamos el objeto point que tiene una funcion que crea propiedades de los parametros x e y. luego tengo un método que multiplica las variables por si mismo y el resultado de eso lo suma y termina dando la raiz cuadrada de esa suma. 