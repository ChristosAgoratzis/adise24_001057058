<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['username'])) {
    echo json_encode([
        "status" => "logged_in",
    ]);
} else {
    echo json_encode([
        "status" => "logged_out",
    ]);
}
?>