exports.paginaInicial = () => {
    res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="qualquercoisa"><br>
  Outro campo: <input type="text" name="aquioutrocampo">
  <button>Olá mundo</button>
  </form>
  `);
}

exports.trataPost = (req, res) => {
    res.send('Rota de post')
}