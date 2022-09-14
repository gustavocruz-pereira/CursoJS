const aqui = document.querySelector('.aqui')

const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

function insereTexto() {
    for (let i = 0; i < elementos.length; i++) {
        const e = elementos[i]
        const tag = e.tag
        const texto = e.texto
        console.log('1')
        aqui.innerHTML += `<${tag}> ${texto} </${tag}>`
    }
}

insereTexto()
