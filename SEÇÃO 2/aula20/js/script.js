function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resu');

    const pessoas = [nome, sobrenome];

    function recebeEventoform(evento) {
        evento.preventDefault()
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value
        })

    }
    console.log(pessoas)

    resultado.innerHTML = `<p>${nome.value} ${sobrenome.value}</p>`

    form.addEventListener('submit', recebeEventoform)
}

meuEscopo()

