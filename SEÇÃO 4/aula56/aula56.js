// Funções fabrica

function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        fala: function (assunto) {
            return `${this.apelido} está falando sobre ${assunto}`
        },

        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },

        set nomeCompleto(valor) {
            console.log(valor)
        },

        apelido: 'Gus',
        peso,
        altura,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gustavo', 'Cruz', 70, 1.8)
console.log(p1.fala('outro assunto'))

console.log(p1.imc)

console.log(p1.nomeCompleto)