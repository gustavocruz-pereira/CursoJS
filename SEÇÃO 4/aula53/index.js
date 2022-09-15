// Closures
function retornaFunc(nome) {
    return function () {
        return nome
    }
}

const funcao = retornaFunc('Gus');
const funcao2 = retornaFunc('Gus2');
console.log(funcao(), funcao2())