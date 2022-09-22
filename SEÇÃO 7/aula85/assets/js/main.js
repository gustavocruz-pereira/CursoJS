class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('.formulario');


        this.eventos(); // Para ja chamar o envento quando o objeto for criado
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
    }

    camposSaoValidos() {
        let valid = true

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode ficar em branco`)
                valid = false;
            }
        }

        if (campo.classList.contains('cpf')) {
            if (!this.ValidaCPF(campo)) valid = false;
        }

        return valid
    }

    validaUsuario() {
        const usuario = campo.value;
        let valid = true;
        if (!usuario.macht(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuario precisa ter apenas letras e/ou numero');
            valid = false;
        }

        if (!usuario.macht(usuario.lenght < 3 || usuario.lenght > 12)) {
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
    }

    validaCPF(campo) {

        const cpf = new ValidaCPF(campo.value)
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false
        }

    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaForm();