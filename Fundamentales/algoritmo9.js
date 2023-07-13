// Extraer la primera mitad de la cadena

// Write a function that takes a string (a) as argument. Extract the first half a. Return the result

// Escribe una función que tome una cadena (a) como argumento. Extraiga la primera mitad a. Devolver el resultado

const myFunction = (a) => {
   
// return a.substring(0, a.length / 2)
return a.slice(0, a.length / 2)

}

console.log(myFunction('abcdefgh'))

// console.log(myFunction('1234'))