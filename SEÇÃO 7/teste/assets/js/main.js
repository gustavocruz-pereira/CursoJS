const b = document.querySelector('.botao')
const p = document.querySelector('.numero')

function geraNumero() {
    let rand = Math.random() * 10000
    console.log(rand.toFixed(0))
}

b.addEventListener("click", function () {
    let rand = (Math.random() * 10000).toFixed(0)
    console.log(rand)
    p.innerHTML = `<p> ${rand} </p>`
});