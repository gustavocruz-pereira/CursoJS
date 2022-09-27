// Polimorfismo

//Superclasse (base)
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`)
}



const conta1 = new Conta(11, 22, 10)
conta1.depositar(500)
console.log(conta1)


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;