let s = "Hello, world";
// Ejercicio 1: Obtén la segunda palabra de la cadena s (en este caso, "world") utilizando las funciones de cadena proporcionadas.
let palabras = s.split(', ')
let segundaPalabra = palabras[1]
console.log(segundaPalabra)

// Ejercicio 2: Encuentra la posición de la última letra "o" en la cadena s.
let ultimaPosicionO = s.lastIndexOf('o')
console.log(ultimaPosicionO)

// Ejercicio 3: Dada una cadena newS, crea una nueva cadena que sea igual a s, pero con todas las letras en minúscula.
newS = s.toLowerCase()
console.log(newS)

// Ejercicio 4: Comprueba si la cadena s contiene solo letras (sin espacios ni caracteres especiales). Puedes utilizar una función de expresión regular para esto.
let soloLetras = /^[A-Za-z]+$/
if(soloLetras.test(s)) {
    console.log('tiene solo letras.')
} else {
    console.log('la cadena contiene caracteres no permitidos')
}

// Ejercicio 5: Dada una cadena word, verifica si la cadena s comienza con word.
let word = 'word'
if (s.startsWith(word)) {
    console.log('comienza con word')
} else {
    console.log('la cadena no comienza con word')
}

// Ejercicio 6: Dada una cadena suffix, verifica si la cadena s termina con suffix.
let suffix = 'suffix'
if(s.endsWith(suffix)) {
    console.log('la cadena termina con suffix')
} else {
    console.log('la cadena no termina con suffix')
}

// Ejercicio 7: Dada una cadena s, reemplaza todas las vocales en la cadena con el carácter "#" y muestra la cadena resultante.
let remplazar = s.replace(/[aeiouAEIOU]/g, '#')
console.log(remplazar)

// Ejercicio 8: Dada una cadena s, cuenta cuántas veces aparece la letra "l" en la cadena.

// Ejercicio 9: Dada una cadena s, elimina todas las comas y espacios en la cadena y muestra la cadena resultante.

// Ejercicio 10: Dada una cadena s, verifica si la cadena contiene la palabra "world".