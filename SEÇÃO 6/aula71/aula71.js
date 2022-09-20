// Object.defineProperty() - defineProperties


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor chave
        writable: false, // pode alterar
        configurable: false // configuravel

    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        sobrenome: {
            enumerable: true,
            value: sobrenome,
            writable: true,
            configurable: false
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 10
console.log(p1)