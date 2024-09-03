<?php
// Configurações de conexão com o banco de dados
$host = "localhost:3307"; // Endereço do servidor MySQL
$user = "root"; // Nome de usuário do MySQL
$password = "PUC@1234"; // Senha do MySQL
$dbname = "Farmacia"; // Nome do banco de dados

// Criando a conexão com a classe mysqli
$conn = new mysqli($host, $user, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Definindo o charset para UTF-8 para evitar problemas com caracteres especiais
$conn->set_charset("utf8");
?>
