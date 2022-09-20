// Concatenando Arrays

const a1 = [1, 2, 3]
const a2 = [5, 6, 7]
//const a3 = a1.concat(a2, [7, 8, 9], 'Gus')

const a3 = [...a1, ...a2, ...[7, 8, 9], 'Gus']
console.log(a3)