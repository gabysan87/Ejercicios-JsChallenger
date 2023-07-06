// Comprobar si un número es un número entero


// Escribe una función que tome un número (a) como argumento. Si a es un número entero (no tiene lugar decimal), devuelve verdadero. De lo contrario, devuelve falso.

const myFunction = (a) => {

// return Number.isInteger(a);
return a - Math.floor(a) === 0
}

console.log(myFunction(4))
console.log(myFunction(1.123))
console.log(myFunction(1048))

// Number.isInteger() El método determina si el valor proporcionado es un número entero o no.
// Usamos el Math.floor()método redondea un número HACIA ABAJO al entero más cercano.
