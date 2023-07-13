
// Encuentra la posición de una cadena en otra

// /Escribe una función que tome una cadena como argumento. La cadena contiene la subcadena 'es'. Devuelve el índice de 'es'.

const myFunction = (a) => {

return a.indexOf("is")
}

console.log(myFunction("risky"))


// Usando el método indexOf
// Si también necesitas encontrar la posición en la que se encuentra el carácter, tendrás que usar el método indexOf, que devolverá la posición en la que se ha encontrado el carácter dentro de la cadena, o -1 en caso de que no esté presente