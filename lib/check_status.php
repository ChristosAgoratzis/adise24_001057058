<?php
session_start();
require 'dbconnect.php'; // Σύνδεση στη βάση

$query = "SELECT COUNT(*) AS logged_count FROM Users WHERE is_active = 1 " ;
$stmt = $mysqli->prepare($query);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

if ($row['logged_count'] >= 2) {
    echo json_encode(["status" => "active"]);
} else {
    echo json_encode(["status" => "inactive"]);
}

$stmt->close();
$mysqli->close();

?>

