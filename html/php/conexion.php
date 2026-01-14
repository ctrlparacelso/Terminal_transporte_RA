<?php

$servername = "mysql"; // nombre del servicio MySQL en docker-compose
$username = "root";
$password = "MiContraseñaSegura"; // debe coincidir con el docker-compose.yml
$dbname = "terminaldb";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Revisar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conexión exitosa a la base de datos!";
