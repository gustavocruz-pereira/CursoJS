// Funções recursivas -ela executa o código dela e se chama de volta

function recursiva(max) {
    if (max >= 100000) return;
    max++;
    console.log(max)
    recursiva(max)
}

recursiva(0)