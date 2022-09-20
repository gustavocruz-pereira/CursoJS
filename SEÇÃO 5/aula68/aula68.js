// Filter + Map + Reduce

// Retorne a soma do dobro de todos os pares
// -> Filtrar
// -> Dobrar valores
// -> Reduzir
const numeros = [5, 50, 10, 40, 93, 7, 21]
const numerosPares = numeros.filter(valor => valor % 2 === 0
).map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor
    );

console.log(numerosPares)

