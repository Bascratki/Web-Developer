var express = require ('express');
var app = express();

app.use(express,static('./pages'));

const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Olá, mundo!');
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});