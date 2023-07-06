// Operadores de multiplicación, división y comparación

// Escribe una función que tome dos números (a y b) como argumentos. Si a es más pequeño que b, divide a entre b. De lo contrario, multiplica ambos números. Devolver el valor resultante

const myFunction = (a, b) => {
 return a < b ? a / b : a * b
}

console.log(myFunction(10, 100))
console.log(myFunction(90, 45))


// en este se utiliza  operador ternario
// Si a es menor < que b, ?  entonces a se divide entre b : luego multiplicamos a por b 

