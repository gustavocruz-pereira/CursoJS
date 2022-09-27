// Funções geradoras

function* geradora1() {
    //Codigo qualquer
    yield 'Valor 1'

    //Codigo qualquer
    yield 'Valor 2'

    //Codigo qualquer
    yield 'Valor 3'

}

const g1 = geradora1()

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);