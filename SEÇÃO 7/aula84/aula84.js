// 705.484.450-52 070.987.720-03
/*
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

cpf = "705.484.450-52"

class FormataCPF {
    constructor(cpf) {
        this.cpf = cpf;
    }

    valida(v) {
        let d1
        let d2
        v = this.formataCpf(v)
        d1 = this.primeiraParte(v)
        d1 = this.digito(d1)
        v.push(d1)
        d2 = this.segundaParte(v)
        d2 = this.digito(d2)
        v.push(d2)
        v.join('')
    }

    formataCpf(v) {
        this.cpf = cpf.replace(/\D+/g, '');
        this.cpf = Array.from(this.cpf)
        this.cpf.pop()
        this.cpf.pop()
        return this.cpf;
    }

    primeiraParte(v) {
        let c = 10;
        let r = 0;
        for (let x of v) {
            if (c < 2) break
            r += x * c
            c -= 1
        }
        return r
    }

    digito(v) {
        if (11 - (v % 11) > 9) return 0
        return 11 - (v % 11);
    }

    segundaParte(v) {
        let c = 11;
        let r = 0;
        for (let x of v) {
            if (c < 2) break
            r += x * c
            c -= 1
        }
        return r
    }

}

const c1 = new FormataCPF("705.484.450-52")
a = c1.valida()
console.log(a)