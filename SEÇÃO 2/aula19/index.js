// Valores primitivos

/**
 * Primitivos (imutaveis) - string, number, boolean, undefined, null(bigint, symbol) - Valores copiados
 * 
 * Referencia (mutavel) - array, object, function - Passados por referencia
 * 
 */

let a = [1, 2, 3];
let b = a
let c = [...a] // copia o valor

a.push(4)

console.log(a, b, c)