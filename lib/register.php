<?php 
session_start();
require "dbconnect.php";

header('Content-Type: application/json');

// Ανάγνωση δεδομένων JSON
$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$password = $data['password'];
$email = $data['email'];
$sql = "SELECT COUNT(*) AS total_rows FROM Users;";
$result = $mysqli->query($sql);
$row = $result->fetch_assoc();
$id= $row["total_rows"];
$state =0 ;

// Έλεγχος αν το username ή το email υπάρχουν ήδη
$checkQuery = "SELECT * FROM Users WHERE username = ? OR email = ?";
$stmt = $mysqli->prepare($checkQuery);
$stmt->bind_param("ss", $username, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Username or email already exists.']);
} else {
    // Κρυπτογράφηση κωδικού
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);


    // Εισαγωγή του νέου χρήστη
    $id++;
    $insertQuery = "INSERT INTO Users(id,username,email,password,is_active) VALUES (?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($insertQuery);
    $stmt->bind_param("isssi", $id, $username,$email,$hashed_password,$state);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Registration successful.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Registration failed.']);
    }
}

$stmt->close();
$mysqli->close();

?>