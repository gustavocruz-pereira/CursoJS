/**
 * FALSY
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
*/

console.log('Gus' && undefined && 'Hello') // Vai retornar o unico valor que é 'FALSY'
console.log('' || 0 || undefined || 'Gus' || null) // Vai retornar o unico valor que não é 'FALSY'

const a = 0;
const b = null;
const c = false;
const d = NaN;

console.log(a || b || c || d) // Retorna o ultimo valor false, caso não encontre um verdadeiro