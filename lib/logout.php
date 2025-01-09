<?php
session_start();
require 'dbconnect.php'; 


if (isset($_COOKIE['username'])) {
    $username = $_COOKIE['username'];
    $query = "UPDATE Users SET is_active = 0 WHERE username = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("s", $username); 
    $stmt->execute(); // Εκτελεί την ενημέρωση
    $stmt->close();
    setcookie("username", "", time() - 3600, "/");
    // Διαγραφή των δεδομένων της συνεδρίας
    session_unset(); 
    session_destroy();
}

// Μετά την αποσύνδεση, στείλε τον χρήστη στην αρχική σελίδα
header("Location: ../html/index.html");
exit();
?>
