const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Minha primeira API funcionando!',
        status: 'sucesso',
        timestamp: new Date().toISOString()
    });
});

app.get('/info', (req, res) => {
    res.json({
        nome: 'Minha API REST',
        versao: '1.0.0',
        autor: 'Seu Nome'
    });
});
app.get('/api/me', (req, res) => {
    res.json({
        nome: "João Victor Martins Ferro",
        curso: "Ciência da Computação",
        hobbies: ["Ler", "Assistir a filmes", "jogar"],
        linguagens: ["Java"]
    });
});
app.get('/api/data', (req, res) => {
    res.json({
        data_atual: new Date().toLocaleDateString('pt-BR'),
        hora_atual: new Date().toLocaleTimeString('pt-BR')
    });
});
app.get('/api/random', (req, res) => {
    const numero = Math.floor(Math.random() * 100);
    res.json({
        numero_gerado: numero
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
