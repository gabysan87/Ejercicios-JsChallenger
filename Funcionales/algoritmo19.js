// Dividir un número en sus dígitos

// Escribe una función que tome un número (a) como argumento. Divide a en sus dígitos individuales y devuélvelos en una matriz. Consejo: es posible que desee cambiar el tipo de número para la división

const myFunction =(a) =>{

// return  [...String(a)].map(Number);  
const string = a + '';
const strings = string.split('');
return strings.map(digit => Number(digit))

}

console.log(myFunction(10))
console.log(myFunction(931))

