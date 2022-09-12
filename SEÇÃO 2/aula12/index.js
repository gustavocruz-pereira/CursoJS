let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

const n = varA
varA = varB
varB = varC
varC = n

console.log(varA, varB, varC)