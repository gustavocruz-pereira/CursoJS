// Try catch throw

try {
    console.log(nome)
} catch (erro) {
    console.log('Erro')
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser numeros');
    }
    return x + y
}
try {
    console.log(soma('a', 'b'))
} catch (e) {
    console.log(e)
}