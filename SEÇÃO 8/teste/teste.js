function test() {
    const cot = fetch('https://api.github.com/users/gustavocruz-pereira')
        .then((dados) => {
            return dados.json()
        })
        .then((dados) => {
            console.log(dados.bio)
        })

    const p = document.querySelector('.texto')
    p.innerHTML = `Biografia: ${cot.bio}`
}

//test()


// Async 

async function test2() {
    try {
        const response = await fetch('https://api.github.com/users/gustavocruz-pereira')
        const jsonResponse = await response.json();
        console.log(jsonResponse)

        const p = document.querySelector('.texto')
        p.innerHTML = `Biografia: ${jsonResponse.bio}`
    }
    catch (e) {
        console.log('Erro', e)
    }


}

test2()