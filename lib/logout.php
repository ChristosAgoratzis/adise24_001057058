<?php
session_start();
require 'dbconnect.php'; // Σύνδεση με τη βάση δεδομένων

// Αν υπάρχει συνεδρία, κάνε logout
if (isset($_SESSION['username'])) {
    $userId = $_SESSION['user_id'];
    $query = "UPDATE Users SET is_active = 0 WHERE id = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("i", $userId); // bind user_id
    $stmt->execute(); // Εκτελεί την ενημέρωση
    $stmt->close();

    // Διαγραφή των δεδομένων της συνεδρίας
    session_unset(); 
    session_destroy();
}

// Μετά την αποσύνδεση, στείλε τον χρήστη στην αρχική σελίδα
header("Location: ../html/index.php");
exit();
?>
