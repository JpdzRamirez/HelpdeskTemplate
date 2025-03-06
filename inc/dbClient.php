<?php
require_once __DIR__ . '/../vendor/autoload.php'; // Asegúrate de que apunta al autoload de Composer

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../'); // Ajusta la ruta si es necesario
$dotenv->load();
function getUserPDO($user_id) {
    $host = 'localhost';
    $dbname = 'softlogy';
    $username = 'root';
    $password = 'Adm1nPC44$';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->prepare("SELECT * FROM glpi_users WHERE id = :id");
        $stmt->execute(['id' => $user_id]);

        return $stmt->fetch(PDO::FETCH_ASSOC); // Devuelve la primera fila como array asociativo
    } catch (PDOException $e) {
        die("Error de conexión: " . $e->getMessage());
    }
}