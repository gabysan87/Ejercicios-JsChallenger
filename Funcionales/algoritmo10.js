// Eliminar los últimos n caracteres de la cadena

// Escribe una función que tome una cadena (a) como argumento. Elimina los últimos 3 caracteres de a. Devolver el resultado

const myFunction = (a) => {

// return a.substring(0, a.length -3);
return a.slice(0, -3);
}

console.log(myFunction('abcdefg'))