const mysql = require("mysql")

const conexao = mysql.createConnection({
    host: "127.0.0.1",
    port: 3310,
    user: "root",
    password: "",
    database: "aulanode"
})

module.exports = conexao;