let data = new Date();
let teste = data.getDay();

const d = document.querySelector(".data")

function formataData() {
    let diaSem = data.getDay()
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let hora = data.getHours();
    let min = data.getMinutes();

    return `${diaSemana(diaSem)}, ${dia} de ${mesLiteral(mes)} de ${ano} - ${hora}:${min}`;
}

function diaSemana(d) {
    let diaSem;

    switch (d) {
        case 0:
            diaSem = 'Domingo';
            return diaSem;
        case 1:
            diaSem = 'Segunda-feira';
            return diaSem;
        case 2:
            diaSem = 'Terça-feira';
            return diaSem;
        case 3:
            diaSem = 'Quarta-feira';
            return diaSem;
        case 4:
            diaSem = 'Quinta-feira';
            return diaSem;
        case 5:
            diaSem = 'Sexta-feira';
            return diaSem;
        case 6:
            diaSem = 'Sabado';
            return diaSem;
    }
}

function mesLiteral(m) {
    mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return mes[m];
}

let e = formataData();

d.innerHTML = `<p>${e}</p>`;

/* Forma mais simples de resolver
const p = document.querySelector('.container p');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

p.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
*/