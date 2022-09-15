// Parametros função

function funcao() {
    let total = 0
    for (argumento of arguments) {
        console.log(argumento)
    }
    //console.log(arguments[0]);
}
funcao('Oi', 1, 2, 3, 4, 5, 6, 7);


function soma(a, b = 0, c = 2) {
    console.log("---- SOMA ----")
    console.log(a + b + c)
}
soma(5)


function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log('---- conta ----')
    console.log(acumulador)
}

conta('+', 1, 10, 20, 30, 40)