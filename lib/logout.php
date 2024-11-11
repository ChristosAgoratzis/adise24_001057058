<?php
session_start(); // Ξεκινά το session
require 'dbconnect.php'; // Σύνδεση με τη βάση δεδομένων

$userId = $_SESSION['user_id'];
$sessionId = $_SESSION['session_id'];
echo $userId ; 
echo $sessionId ;
$query = "UPDATE Users SET is_active = 0 WHERE id = ?";
$stmt = $mysqli->prepare($query);
$stmt->bind_param("i", $userId); // bind user_id και session_id
$stmt->execute(); // Εκτελεί την ενημέρωση
$stmt->close();
session_unset(); 
session_destroy();


header("Location: ../html/index.php");
exit();
?>