import express from 'express';
import cors from 'cors';
import { DatabaseModel } from './model/DatabaseModel';

// definindo a porta do servidor
const port: number = 3333;

// criando servidor web
const server = express();
server.use(cors());
server.use(express.json());

//rotas de aplicação
server.get('/', (req, res) => {
    res.json({ mensagem: "Olá mundo, está é minha primeira aplicação web"});
});

server.get('/pessoas', (req, res) => {
    res.json({ mensagem: "Aqui será apresentado os dados das pessoas."});
});

new DatabaseModel().testeConexao(). then((resdb) => {
    if(resdb) {
        console.log("Conexão com banco de dados estabelecida com sucesso!");
    } else {
        console.log("Erro ao estabelecer conexão com banco de dados!");
    }
});

// iniciando o servidor
server.listen(port, () => {
    console.log(`Servidos iniciado no endereço http://localhost:${port}`);
});