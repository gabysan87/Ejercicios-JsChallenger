// Comprobar si una cadena contiene otra cadena y concatenar

// Escriba una función que tome dos cadenas (a y b) como argumentos. Si a contiene b, agregue b al comienzo de a. Si no, añádelo al final. Devolver la concatenación

const myFunction = (a, b) => {

// return a.includes(b) ? b + a : a + b;

return a.indexOf(b) === -1 ? a + b : b + a
}

// console.log(myFunction('cheese', 'cake'))
console.log(myFunction('lips', 's'))

// Esta función utiliza el operador ternario (?) para verificar si a contiene b. Si es así, se concatena b al principio de a utilizando b + a. De lo contrario, se concatena b al final de a utilizando a + b. El resultado se devuelve automáticamente debido al uso de una función de flecha de una sola línea.

// dos puntos casos contrario 