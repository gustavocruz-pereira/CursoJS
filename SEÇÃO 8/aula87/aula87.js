// Métodos uteis para promises

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false)
            return
        }
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })

}


// Promise.all, Promise.race, Promise.resolve, Promise.reject

const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promice 3', 5000),
    'Outro valor'
];

// Executa tudo da lista e Caso encontre um erro nas promisses ele retorna o erro apenas.
Promise.all(promises).then(
    function (valor) {
        console.log(valor)
    }
).catch(e => {
    console.log(e)
})

function baixaPagina() {
    const emCache = false;

    if (emCache) return Promise.resolve('Pagina em cache')
    else {
        return esperaAi('Baixei a pagina', 3000);
    }

}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))

//  Promise.race() retorna a primeira promise resolvida