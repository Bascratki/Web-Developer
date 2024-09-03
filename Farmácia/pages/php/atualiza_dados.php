<?php
try {
    // Exemplo de atualização de dados
    $sql = "UPDATE sua_tabela SET coluna = :novo_valor WHERE id = :id";
    $stmt = $pdo->prepare($sql);

    // Bind dos parâmetros
    $stmt->bindParam(':novo_valor', $novo_valor);
    $stmt->bindParam(':id', $id);

    // Definindo os valores e executando
    $novo_valor = 'valor_atualizado';
    $id = 1; // ID do registro a ser atualizado
    $stmt->execute();

    echo "Dados atualizados com sucesso!";
} catch (PDOException $e) {
    echo "Erro ao atualizar: " . $e->getMessage();
}
?>
