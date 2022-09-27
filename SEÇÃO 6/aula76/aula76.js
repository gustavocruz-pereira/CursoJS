// Herança 

// Produto
// Camisa, Lapis, Caneca

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco)
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;

const cam = new Camisa('Regata', 20.0);
cam.aumento(10)
console.log(cam)