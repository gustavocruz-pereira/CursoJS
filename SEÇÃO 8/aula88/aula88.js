// Async / Await

function rand(min = 1, max = 3) {
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
            resolve(console.log(msg))
        }, tempo)
    })

}

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand())
        const fase2 = await esperaAi('Fase 2', rand())
        const fase3 = await esperaAi(5000, rand())
        console.log('Terminamos na fase: ', fase3)
    }
    catch (e) {
        console.log(e)
    }
}

executa()

// pending -> pendente
// FullFilled -> resolvida
// reject -> rejeitada