<?php
try {
    // Exemplo de deleção de dados
    $sql = "DELETE FROM sua_tabela WHERE id = :id";
    $stmt = $pdo->prepare($sql);

    // Bind dos parâmetros
    $stmt->bindParam(':id', $id);

    // Definindo o valor e executando
    $id = 1; // ID do registro a ser deletado
    $stmt->execute();

    echo "Dados deletados com sucesso!";
} catch (PDOException $e) {
    echo "Erro ao deletar: " . $e->getMessage();
}
?>
