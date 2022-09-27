/*
 *  705.484.450-52 070.987.720-03

7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237
11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284
11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

let cpf = "705.484.450-52"
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfLimpo = Array.from(cpfLimpo);


function primeiraParte(cpf) {
    let c = 10
    let r = 0
    for (let x of cpf) {
        if (c < 2) {
            break;
        }
        num = Number(x);
        r += num * c;
        c -= 1;
    }
    return r;
}
function digito(n) {
    if (11 - (n % 11) > 9) {
        return 0
    }
    return 11 - (n % 11)
}

let pd = primeiraParte(cpfLimpo)
pd = digito(pd)
cpfLimpo.push(pd)

function segundaParte(cpf) {
    c = 11
    r = 0
    for (let x of cpf) {
        if (c < 2) {
            break;
        }
        num = Number(x);
        r += num * c;
        c -= 1;
    }
    return r;
}

sd = segundaParte(cpfLimpo)
sd = digito(sd)

cpfLimpo.push(sd)
cpfFinal = cpfLimpo.join('')

if (cpfFinal === cpfLimpo.join()) {
    console.log('Cpf valido')
    console.log(cpfFinal, cpfLimpo)
}
else {
    console.log('Cpf invalido')
    console.log(cpfFinal, cpfLimpo)
}