import './assets/css/style.css';
import GeraCpf from './modules/geracpf';

(function () {
    const gera = new GeraCpf();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();

})();

