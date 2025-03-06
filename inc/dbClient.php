<?php
include_once(GLPI_ROOT . "/inc/config.php");

// Cargar variables de entorno desde la raíz del proyecto
loadEnv(dirname(__DIR__) . '/.env');


// Función para conectarse a la base de datos usando las variables de entorno
function getUserPDO($user_id)
{
    $host = getenv('DB_HOST');
    $dbname = getenv('DB_NAME');
    $username = getenv('DB_USER');
    $password = getenv('DB_PASS');

    if (!$host || !$dbname || !$username || !$password) {
        die("Error: No se pudieron cargar las credenciales de la base de datos.");
    }

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
