const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Para servir HTML e CSS

// Configurando a conexão com o MySQL
const db = mysql.createConnection({
  host: 'localhost:3307',
  user: 'root',
  password: 'PUC@1234',
  database: 'farmacia'
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para criar um novo item (Create)
app.post('/items', (req, res) => {
  const { nome, descricao, preco } = req.body;
  const query = 'INSERT INTO items (nome, descricao, preco) VALUES (?, ?, ?)';
  db.query(query, [nome, descricao, preco], (err, results) => {
    if (err) {
      console.error('Erro ao inserir item:', err);
      res.status(500).send('Erro ao inserir item');
    } else {
      res.redirect('/');
    }
  });
});

// Rota para ler itens (Read)
app.get('/items', (req, res) => {
  const query = 'SELECT * FROM items';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar itens:', err);
      res.status(500).send('Erro ao buscar itens');
    } else {
      res.json(results);
    }
  });
});

// Rota para atualizar um item (Update)
app.put('/items/:id', (req, res) => {
  const { nome, descricao, preco } = req.body;
  const { id } = req.params;
  const query = 'UPDATE items SET nome = ?, descricao = ?, preco = ? WHERE id = ?';
  db.query(query, [nome, descricao, preco, id], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar item:', err);
      res.status(500).send('Erro ao atualizar item');
    } else {
      res.send('Item atualizado com sucesso!');
    }
  });
});

// Rota para deletar um item (Delete)
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM items WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Erro ao deletar item:', err);
      res.status(500).send('Erro ao deletar item');
    } else {
      res.send('Item deletado com sucesso!');
    }
  });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
