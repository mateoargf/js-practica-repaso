let s = "Hello, world";
// Ejercicio 11: Dada una cadena s, invierte la cadena de manera que la última letra se convierta en la primera, la penúltima en la segunda, y así sucesivamente. Por ejemplo, si s es "hello", el resultado debería ser "olleh".
let invertir = ''
for (let i = s.length - 1; i >= 0; i--) {
    invertir += s[i]
}
console.log(invertir)
let invertida = s.split('').reverse().join('')
console.log(invertida)

// Ejercicio 12: Dada una cadena s, verifica si es un palíndromo, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda. Por ejemplo, "racecar" es un palíndromo.
let sLimpia = s.replace(/[,]/g, '')
let invertidaDos = sLimpia.split('').reverse().join('')
let check = sLimpia === invertidaDos ? 'palindromo' : 'no es palindromo'
console.log(check)
console.log(invertidaDos)

// Ejercicio 13: Dada una cadena s, cuenta cuántas palabras hay en la cadena. Puedes asumir que las palabras están separadas por espacios.
let palabras = s.replace(/[,\s]+/g, ' ').trim().split(' ').length;
console.log(palabras)

// Ejercicio 14: Dada una cadena s, verifica si todas las letras en la cadena son mayúsculas.
let mayuscula = s === s.toUpperCase()
console.log(mayuscula)

// Ejercicio 15: Dada una cadena s, encuentra la palabra más larga en la cadena (la palabra con más caracteres).
// const encontrarPalabraMasLarga = (cadena) => {
//     // Dividimos la cadena en palabras utilizando una expresión regular que busca comas y espacios como delimitadores.
//     const palabras = cadena.split(/[,\s]+/g);

//     // Verificamos si hay al menos dos palabras en la cadena.
//     if (palabras.length < 2) {
//         return "La cadena no contiene al menos dos palabras.";
//     }

//     // Inicializamos una variable llamada palabraMasLarga con la primera palabra.
//     let palabraMasLarga = palabras[0];

//     // Luego, recorremos las demás palabras en un bucle a partir de la segunda palabra (índice 1).
//     for (let i = 1; i < palabras.length; i++) {
//         // Comparamos la longitud de la palabra actual con la longitud de palabraMasLarga.
//         // Si la palabra actual es más larga, actualizamos palabraMasLarga.
//         if (palabras[i].length > palabraMasLarga.length) {
//             palabraMasLarga = palabras[i];
//         }
//     }

//     // Filtramos las palabras que tienen la misma longitud que palabraMasLarga.
//     const palabrasMasLargas = palabras.filter(palabra => palabra.length === palabraMasLarga.length);

//     // Finalmente, dependiendo de si hay una o varias palabras más largas, generamos el mensaje adecuado.
//     if (palabrasMasLargas.length > 1) {
//         return `Las palabras más largas son "${palabrasMasLargas.join('", "')}" con ${palabraMasLarga.length} caracteres cada una.`;
//     } else {
//         return `La palabra más larga es "${palabraMasLarga}" con ${palabraMasLarga.length} caracteres.`;
//     }
// }

// console.log(encontrarPalabraMasLarga(s));

const  encontrarPalabraMasLarga = (cadena) => {
    const palabras = cadena.split(/[,\s]+/g);

    if (palabras.length < 2) {
        return "La cadena no contiene al menos dos palabras.";
    }

    const longitudMaxima = Math.max(...palabras.map(palabra => palabra.length));
    console.log(longitudMaxima)
    const palabrasMasLargas = palabras.filter(palabra => palabra.length === longitudMaxima);
    console.log(palabrasMasLargas)

    return palabrasMasLargas.length > 1
        ? `Las palabras más largas son "${palabrasMasLargas.join('", "')}" con ${longitudMaxima} caracteres cada una.`
        : `La palabra más larga es "${palabrasMasLargas[0]}" con ${longitudMaxima} caracteres.`;
}
encontrarPalabraMasLarga(s)
console.log(encontrarPalabraMasLarga(s));

// Ejercicio 16: Dada una cadena s, reemplaza todas las letras minúsculas con letras mayúsculas y todas las letras mayúsculas con letras minúsculas.
const reemplazarMM = (cadena) => {
    let palabras = ''
    for (let caracter of cadena) {
        if(caracter===caracter.toLowerCase()) {
            palabras += caracter.toUpperCase()
        }else {
            palabras += caracter.toLowerCase()
        }
    }
    return palabras
}
console.log(reemplazarMM(s))

// Ejercicio 17: Dada una cadena s, verifica si contiene solo dígitos numéricos.
const contieneNumeros = (cadena) => {
             
 } 

// Ejercicio 18: Dada una cadena s, elimina todos los caracteres no alfabéticos (como números y símbolos) de la cadena.

// Ejercicio 19: Dada una cadena s, verifica si todas las palabras en la cadena comienzan con letra mayúscula.

// Ejercicio 20: Dada una cadena s, verifica si es una URL válida (debe comenzar con "http://" o "https://").