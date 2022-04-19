// npm install consign
let vezes = 0

module.exports = app => {
   app.get('/despesa', (req, res) => res.send(`Você acessou ${vezes++}`))
   app.post('/despesa', (req, res) => res.send('Você esta em despesa via POST'))
}

//Testar POST
//CURL -d  "nome":"vinicius" http://localhost:3000/despesa