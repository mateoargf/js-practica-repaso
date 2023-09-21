// Nivel Básico:
// Calcula el valor absoluto de un número ingresado por el usuario utilizando Math.abs().
const calculoValor = (numero) => {
    return Math.abs(numero)
}
console.log(calculoValor(-0.4))

// Redondea un número decimal ingresado por el usuario al entero más cercano utilizando Math.round().
const redondeoDecimal = (numero) => {
    return Math.round(numero)
}
console.log(redondeoDecimal(0.7))

// Calcula el valor de π utilizando Math.PI y muestra el resultado.
const valorPI = () => {
    return Math.PI
}
console.log(valorPI())

// Genera un número aleatorio entre 1 y 100 utilizando Math.random() y muestra el resultado.
const numeroAleatorio = (numero) => {
    return Math.random()
}
console.log(numeroAleatorio())

// Nivel Intermedio:
// Pide al usuario que ingrese un número y calcula su raíz cuadrada utilizando Math.sqrt(). Asegúrate de manejar casos en los que el número sea negativo.
const calculoRaiz = (numero) => {
    return Math.sqrt(numero)
}
console.log(calculoRaiz(25))

// Crea una función que tome dos números como argumentos y devuelva el número mayor utilizando Math.max().
const devolverMayor = (num1, num2) => {
    return Math.max(num1, num2)
}
console.log(devolverMayor(2, 5))

// Crea una función que tome un número decimal como argumento y lo redondee al número entero más grande utilizando Math.ceil().
const redondearMayor = (decimal) => {
    return Math.ceil(decimal)
}
console.log(redondearMayor(0.01))

// Crea una función que genere un número entero aleatorio entre dos valores dados por el usuario utilizando Math.random() y la aritmética apropiada.
const aleatorioEntreDos = (min, max) => {
    let numeroX = Math.random()
    console.log(numeroX)
    let rango = max - min
    let numeroEscalado = numeroX * rango
    let enteroAleatorio = Math.round(numeroEscalado) + min
    return enteroAleatorio
}
console.log(aleatorioEntreDos(2, 5))

// Nivel Avanzado:
// Crea una función que calcule el factorial de un número entero no negativo utilizando un bucle y el objeto Math.
const factorialEnteroNoNegativo = (numeros) => {
    let numeroPositivo = Math.abs(Math.round(numeros))
    let factorial = 1
    for(let i = 1; i <=numeroPositivo; i++) {
        factorial *= i
    }
    return factorial
}
console.log(factorialEnteroNoNegativo(-5))

// Implementa una función que genere un número aleatorio entre dos valores dados por el usuario, pero que sea un múltiplo de un tercer número ingresado por el usuario. Utiliza Math.floor() para asegurarte de que el resultado sea un múltiplo.


// Crea una función que calcule el valor absoluto de la diferencia entre dos fechas dadas en milisegundos. Puedes utilizar el objeto Date junto con Math.abs().

// Crea un programa que calcule la distancia entre dos coordenadas en un plano cartesiano utilizando la fórmula de la distancia euclidiana y el objeto Math.