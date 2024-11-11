<?php
$host = 'localhost';
$db = 'blokusDB';
require_once "db_upass.php";

$user = $DB_USER;
$pass = $DB_PASS;

// Δοκιμάστε να συνδεθείτε χρησιμοποιώντας το πλήρες μονοπάτι του socket
$mysqli = new mysqli($host, $user, $pass, $db, null, '/home/student/iee/2020/iee2020001/mysql/run/mysql.sock');

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
 

?>
