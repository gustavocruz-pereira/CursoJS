// Mais sobre numeros

// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2)) // Arredondando para 1.00 e para inteiro

console.log(num1)
console.log(Number.isInteger(num1))

/*
let num1 = 1
let num2 = 2.5

console.log(num1.toString())
console.log(num2.toFixed(2))
*/