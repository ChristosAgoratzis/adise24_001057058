<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT");
error_reporting(E_ALL);
ini_set('display_errors', 1);

require "dbconnect.php";

$method = $_SERVER["REQUEST_METHOD"];

if($method == "GET"){
    $result = $mysqli->query("SELECT * FROM Board");
    $data = [];
    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }
    echo json_encode($data);

}elseif($method == "PUT"){
    $data = json_decode(file_get_contents("php://input"),true);
    $stmt = $mysqli->prepare("UPDATE Board SET color = ? WHERE row_num = ? AND col_num = ?");
    $stmt->bind_param('sii', $data['color'], $data['row_num'], $data['col_num']);
    
    if ($stmt->execute()) {
        echo json_encode(["message" => "Updated successfully"]);
    } else {
        echo json_encode(["error" => "Failed to update"]);
    }
}


?>