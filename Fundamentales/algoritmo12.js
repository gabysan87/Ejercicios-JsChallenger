// Operadoras matemáticas básicas de JavaScript

// Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos. Suma a y b. Luego reste por c. Luego multiplique por d y divida por e. Finalmente eleva a la potencia de f y devuelve el resultado. Consejo: cuidado con el orden.

const myFunction = (a, b, c, d, e, f) => {

return (((a+b) - c) * d /e) **f;
}

console.log(myFunction(6,5,4,3,2,1))

