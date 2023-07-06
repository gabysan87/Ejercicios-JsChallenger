// Redondear un número a 2 decimales

// Escribe una función que tome un número (a) como argumento. Redondea a al segundo dígito después del punto decimal. Devolver el número redondeado

const myFunction =(a) =>{

return Number(a.toFixed(2));
}

console.log(myFunction(2.12397))
console.log(myFunction(3.136))

// El toFixed()método redondea la cadena a un número específico de decimales.

