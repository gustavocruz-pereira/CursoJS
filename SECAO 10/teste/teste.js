const price = document.querySelector('.price-btc')
async function getBitcoin() {
    const response = await fetch('https://economia.awesomeapi.com.br/last/BTC-BRL')
        .then((res) => res.json())
    const dados = await response
    const preco = await dados.BTCBRL.ask
    //console.log(preco)
    return preco
}


getBitcoin().then(value => {
    const p = value
    price.innerHTML += `R$ ${p}`
})


/*async function escrevePreco() {
    const p = await getBitcoin()
    console.log(p)
    price.innerHTML += `R$ ${p}`
}*/

//escrevePreco()
