const paragrafos = document.querySelector('.paragrafos')
const p = paragrafos.querySelectorAll('p'); // todos os <p> dentro de .paragrafos

const estilo = getComputedStyle(document.body);
const background = estilo.backgroundColor;


for (let i of p) {
    i.style.backgroundColor = background;
    i.style.color = 'white'
}