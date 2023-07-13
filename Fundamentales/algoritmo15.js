// ¿Cuántas veces aparece un personaje?

// Escriba una función que tome dos cadenas (a y b) como argumentos. Devuelve el número de veces que a ocurre en b.

const myFunction = (a, b) => {

// return b.split('').filter((item) => item === a).length
return b.split(a).length - 1
}

console.log(myFunction('m', 'how many times does the character occur in this sentence?'))
console.log(myFunction('h', 'how many times does the character occur in this sentence?'))
console.log(myFunction('?', 'how many times does the character occur in this sentence?'))


// primero tomamos la cadena b,  separamos los caracteres y luego usamos filter para crear un nuevo array con los elementos que se le pase, al final usamos lenght para que tome la longitud, sin embargo vemos que se puede usar otro algoritmo 
