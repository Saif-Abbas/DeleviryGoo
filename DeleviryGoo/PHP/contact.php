<?php
$server = "localhost";
$username = "root";
$password = "123";
$dbName = "DeliverGoo";
$tableName = "contactUs";
// Create connection
$conn = new mysqli($server, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS " . $dbName;
if ($conn->query($sql) === TRUE) {
} else {
    echo "Error creating database: " . $conn->error;
}

$tableQuery = "CREATE TABLE IF NOT EXISTS " . $dbName . "." . $tableName . "(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(300) NOT NULL,
    phone varchar(20) NOT NULL,
    message varchar(600) NOT NULL,
    dateReceived varchar(400) NOT NULL);";
if ($conn->query($tableQuery) === TRUE) {
} else {
    echo "Error creating table: " . $conn->error;
}


if ($_POST) {
    extract($_POST);
    $insertQuery = "INSERT INTO " . $dbName . "." . $tableName . "(name, email, phone, message, dateReceived) VALUES('" . $name . "','" . $email . "','" . $phone . "','" . $message . "','" . date('Y-m-d') . "');";
    $success = $conn->query($insertQuery);

    if ($success) {
        echo '<script>
        alert(`Thanks we will reach you soon`);
        window.location.replace(`/`);
        </script>';
    }
    if (!$success) {
        die("Couldn't enter data: " . $conn->error);
    }
}

$conn->close();
