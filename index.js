const customExpress = require('./config/customExpress')
const conexao = require('./infra/connection')
const tabela = require('./infra/tabela')

conexao.connect(erro => {
    if(erro){
        console.log("Erro na conexão" + erro)
    } 
    else{
        console.log("Conectado o banco com sucesso")
        const app = customExpress()
        app.listen(3000, () => console.log('Servidor ativo na porta 3000'))
    }
})

