function meuEscopo() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado')

    function calculaIMC(evento) {
        evento.preventDefault()
        let peso = form.querySelector('.peso')
        let altura = form.querySelector('.altura')


        if (isNaN(peso.value) || isNaN(altura.value)) {
            result.innerHTML = `<p>Por favor digite valores corretos</p>`
        }
        else {

            let imc = peso.value / (altura.value * altura.value)


            if (imc < 18.5) {
                result.innerHTML = `<p>Seu IMC: ${imc.toFixed(2)} - abaixo do peso</p>`
            }
            else if (imc >= 18.5 && imc <= 24.9) {
                result.innerHTML = `<p>Seu IMC: ${imc.toFixed(2)} - Peso ideal</p>`
            }
            else if (imc >= 25 && imc <= 29.9) {
                result.innerHTML = `<p>Seu IMC: ${imc.toFixed(2)} - Levimente acima do peso</p>`
            }
            else if (imc >= 30 && imc <= 34.9) {
                result.innerHTML = `<p>Seu IMC: ${imc.toFixed(2)} - Obesidade grau 1</p>`
            }
            else if (imc >= 35 && imc <= 39.9) {
                result.innerHTML = `<p>Seu IMC: ${imc.toFixed(2)} - Obesidade grau 2</p>`
            }
            else if (imc >= 40) {
                result.innerHTML = `<p>Seu IMC: ${imc.toFixed(2)} - Obesidade grau 3</p>`
            }

        }

    }

    form.addEventListener('submit', calculaIMC);
}

meuEscopo();