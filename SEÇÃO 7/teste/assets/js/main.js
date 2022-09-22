const b = document.querySelector('.botao')

const a = document.addEventListener('submit', e => {
    geraNumero();
})

function geraNumero() {
    let rand = Math.random() * 10000

    console.log(rand.toFixed(0))
}

