class Tabela{
    init(conexao){
        console.log("Banco conectado com sucesso!")
    }

criaDespesa(){
    const sql = 'CREATE TABLE despesa'+
                '(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
                'valor DOUBLE NOT NULL,'+
                'descricao VARCHAR(150) NOT NULL)'
      this.conexao.query(sql)
 }
}
module.exports = new Tabela