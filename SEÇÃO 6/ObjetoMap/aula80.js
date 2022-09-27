// Objeto Map()

const pessoas = [
    { id: 3, nome: 'Gus', idade: 20 },
    { id: 1, nome: 'Gustavo', idade: 23 },
    { id: 2, nome: 'João', idade: 50 },
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas)