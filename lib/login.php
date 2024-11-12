<?php
session_start();
require "dbconnect.php";

header('Content-Type: application/json');


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'];
    $password = $data['password'];

    $sql = "SELECT id, password FROM Users WHERE username = ?";
    $stmt = $mysqli->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $user = $result->fetch_assoc();

            if (password_verify($password, $user['password'])) { 
                $_SESSION['user_id'] = $user['id'];
                
                $query = "SELECT COUNT(*) AS LoggedIn FROM Users WHERE is_active = 1";
                $stmt1 = $mysqli->prepare($query);
                $stmt1->execute();
                $res = $stmt1->get_result();
                $players = $res->fetch_assoc();

                if($players["LoggedIn"] == 2){
                    echo json_encode(['message' => 'You can not enter wait for a player to leave!!']);
                }else{
                    $query = "UPDATE Users SET is_active = 1 WHERE id = ?";
                    $stmt2 = $mysqli->prepare($query);
                    if ($stmt2) {
                        $stmt2->bind_param("i", $user['id']);
                        $stmt2->execute();
                        $stmt2->close();
                   }
                  
                   echo json_encode(['message' => 'ok']);
                }
            } else {
                echo json_encode(['message' => 'Incorrect password']);
            }
        } else {
            echo json_encode(['message' => 'Username not found']);
        }
        $stmt->close();
    } else {
        echo json_encode(['message' => 'SQL Error: ' . $mysqli->error]);
    }
}

$mysqli->close();
?>
