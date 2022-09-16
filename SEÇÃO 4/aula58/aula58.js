// Funções construtoras

// Função contrutoras -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {

    // Atributos ou metodos privados
    const id = 1;
    const metodoInterno = function () {

    }

    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function () {
        console.log(this.nome + ' sou um metodo')
    }
}

const p1 = new Pessoa('Gustavo', 'Cruz')
const p2 = new Pessoa('Nome', 'Sobrenome')

const p3 = new Pessoa('Gustavo', 'Cruz')
p3.metodo()