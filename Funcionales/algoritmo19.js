// Dividir un número en sus dígitos

// Escribe una función que tome un número (a) como argumento. Divide a en sus dígitos individuales y devuélvelos en una matriz. Consejo: es posible que desee cambiar el tipo de número para la división

const myFunction =(a) => {

return a.toString().split("").map(Number);

// return  [...String(a)].map(Number);  

// const string = a + '';
// const strings = string.split('');
// return strings.map(digit => Number(digit))
}

console.log(myFunction(10))
console.log(myFunction(931))

// SINTAXIS
// array.map(function(currentValue, index, arr), thisValue)

// creando un nuevo array= spread operator 

// Primero usamos toString()método devuelve una cadena como una cadena, luego .split para dividir la cadena y al final se usa map() ya que crea una nueva matriz llamando a una función para cada elemento de la matriz.