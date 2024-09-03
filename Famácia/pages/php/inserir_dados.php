<?php
try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Dados recebidos do formulário
    $username = $_POST['username'];
    $email = $_POST['email'];
    $endereco = $_POST['endereco'];
    $celular = $_POST['celular'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Criptografa a senha

    // Inserção no banco de dados
    $sql = "INSERT INTO usuarios (username, email, endereco, celular, senha) VALUES (?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$username, $email, $endereco, $celular, $senha]);

    // Resposta de sucesso
    echo json_encode(['success' => true]);

} catch (PDOException $e) {
    // Resposta de erro
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>
