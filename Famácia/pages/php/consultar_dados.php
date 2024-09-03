<?php
// Conexão já estabelecida usando PDO
try {
    // Exemplo de consulta ao banco de dados
    $sql = "SELECT * FROM usuario"; // Substitua 'sua_tabela' pelo nome da tabela
    $stmt = $pdo->query($sql);
    
    // Exibir resultados
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo $row['nome']; // Substitua 'coluna' pelo nome da coluna que você deseja exibir
    }
} catch (PDOException $e) {
    echo "Erro na consulta: " . $e->getMessage();
}
?>
