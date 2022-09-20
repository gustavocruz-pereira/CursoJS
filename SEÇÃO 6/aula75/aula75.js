// Manipulando prototypes


// new Object -> Object.prototype
const objA = {
    chaveA: 'A',
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B',
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco

    // Não criar funções aqui dentro, usar o prototype para melhorar performace
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camisa', 50);
p1.desconto(50)
console.log(p1)

const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(50)
console.log(p2)